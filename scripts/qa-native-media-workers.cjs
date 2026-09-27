async page => {
  return page.evaluate(async()=>{
    const split=new Worker(new URL('./original/chunks/media-split.js',location.href));
    const merge=new Worker(new URL('./original/chunks/media-merge.js',location.href));
    const request=(worker,data,transfer)=>new Promise((resolve,reject)=>{const timeout=setTimeout(()=>reject(Error('Worker timeout')),5000);worker.onerror=e=>{clearTimeout(timeout);reject(Error(e.message));};worker.onmessage=({data})=>{clearTimeout(timeout);data.error?reject(Error(data.error)):resolve(data);};worker.postMessage(data,transfer);});
    try{
      const source=new VideoFrame(new Uint8Array([30,100,200,128]),{format:'RGBA',codedWidth:1,codedHeight:1,timestamp:0});
      const parts=await request(split,{id:1,sourceFrame:source},[source]);
      const result=await request(merge,{id:2,color:parts.colorFrame,alpha:parts.alphaFrame},[parts.colorFrame,parts.alphaFrame]);
      const bytes=new Uint8Array(result.frame.allocationSize());await result.frame.copyTo(bytes);result.frame.close();
      if(bytes[0]!==30||bytes[1]!==100||bytes[2]!==200||bytes[3]!==128)throw Error('原版 Worker 处理结果不一致');
      return {checks:['真实 MV3 CSP 下加载原版媒体 Worker','原版 RGBA 帧拆分/合并保留颜色和透明度'],rgba:Array.from(bytes)};
    }finally{split.terminate();merge.terminate();}
  });
}
