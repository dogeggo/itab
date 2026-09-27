import {
  bu,
  yu
} from "./chunk-LO6T5NS5.js";
import {
  e
} from "./chunk-76NDQHGN.js";
import {
  l as l2
} from "./chunk-CU777VMF.js";
import {
  c
} from "./chunk-CK4O22IS.js";
import {
  l
} from "./chunk-BP7HAB75.js";
import {
  F
} from "./chunk-R77VKLDU.js";
import {
  n
} from "./chunk-JBUAPD4L.js";
import {
  Ee,
  PI,
  Pe,
  VO,
  aO,
  dv,
  ey,
  nd,
  uc,
  uv,
  zw
} from "./chunk-QX73FKBL.js";
import {
  Mt,
  io as io2,
  kt,
  v
} from "./chunk-LEVEZLTX.js";
import "./chunk-5MDIDYN5.js";
import {
  r as r2
} from "./chunk-AFECQBGL.js";
import {
  b,
  f,
  me,
  ve
} from "./chunk-YQ4PBQUM.js";
import "./chunk-C332WR7G.js";
import "./chunk-C3WGXGFI.js";
import "./chunk-S7M5ZIRT.js";
import {
  E
} from "./chunk-USGTF4JI.js";
import {
  o,
  r
} from "./chunk-ZBQAVDN7.js";
import {
  $o,
  Es,
  Et,
  Fr,
  H,
  Hr,
  Lt,
  On,
  W,
  Z,
  Zr,
  co,
  dt,
  eo,
  fs,
  gi,
  hs,
  io,
  lo,
  mn,
  po,
  to,
  uo,
  ws,
  wt,
  yn
} from "./chunk-E6JHFIG4.js";

// output/native-current/recordingBar-pvbjAMcA.js
var A = r("outline", "picture-in-picture", "PictureInPicture", [["path", { d: "M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4", key: "svg-0" }], ["path", { d: "M14 15a1 1 0 0 1 1 -1h5a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1l0 -3", key: "svg-1" }]]), R = r("outline", "player-stop", "PlayerStop", [["path", { d: "M5 7a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -10", key: "svg-0" }]]);
var L = !!window.__itab_is_new_window_standalone__;
async function j(e2 = !0, t2 = !0) {
  let a2 = (await window.navigator.mediaDevices.getUserMedia({ audio: t2, video: e2 })).getTracks(), n2 = a2.reduce((e3, t3) => {
    if (typeof t3.getCapabilities == "function") {
      if (t3.kind === "video") {
        let a3 = t3.getCapabilities().deviceId;
        a3 && (e3.cameraId = a3);
      } else if (t3.kind === "audio") {
        let a3 = t3.getCapabilities().deviceId;
        a3 && (e3.microphoneId = a3);
      }
    }
    return e3;
  }, {});
  return a2.forEach((e3) => e3.stop()), n2;
}
async function V(e2) {
  let t2 = e2 ? [e2] : ["camera", "microphone"];
  for (let a2 of t2)
    if ((await navigator.permissions.query({ name: a2 })).state !== "granted") return !1;
  return !0;
}
async function _(e2) {
  return (await navigator.mediaDevices.enumerateDevices()).filter((t2) => t2.kind === e2 && t2.deviceId && t2.label);
}
function O() {
  return !["MediaStreamTrackProcessor", "OffscreenCanvas", "TransformStream", "VideoFrame", "MediaStream", "MediaStreamTrackGenerator", "AudioContext"].some((e2) => !(e2 in window));
}
function z(e2) {
  let t2 = e2.largeStream, a2 = e2.smallStream, n2 = e2.microphoneStream, i2 = e2.position, r22 = t2?.getVideoTracks()[0], o2 = a2?.getVideoTracks()[0], s2 = [];
  t2?.getAudioTracks().map((e3) => s2.push(e3)), a2?.getAudioTracks().map((e3) => s2.push(e3)), n2?.getAudioTracks().map((e3) => s2.push(e3));
  let c2 = new MediaStreamTrackProcessor({ track: r22 }), m2 = new MediaStreamTrackProcessor({ track: o2 }), p2 = new MediaStreamTrackGenerator({ kind: "video" }), d2 = c2.readable.getReader(), l22 = new OffscreenCanvas(0, 0), u2 = l22.getContext("2d"), y2 = null, h2 = !1, f2 = new TransformStream({ async transform(e3, t3) {
    if (p2.readyState === "ended") return e3.close(), y2?.close(), void t3.terminate();
    y2 ? h2 || (h2 = !0, d2.read().then((e4) => {
      var t4;
      h2 = !1, y2?.close(), p2.readyState === "ended" ? (t4 = e4.value) == null || t4.close() : y2 = e4.value;
    })) : y2 = (await d2.read()).value, u2.save(), y2 && (l22.width = y2.displayWidth, l22.height = y2.displayHeight, u2.drawImage(y2, 0, 0));
    let a3 = (function(e4) {
      let t4 = Math.ceil(12 * e4.width / 100), a4 = Math.ceil(2 * e4.width / 100), n4 = a4, i3 = a4;
      return e4.position === "lb" ? i3 = e4.height - t4 - a4 : e4.position === "rt" ? n4 = e4.width - t4 - a4 : e4.position === "rb" && (n4 = e4.width - t4 - a4, i3 = e4.height - t4 - a4), { x: n4, y: i3, width: t4, height: t4, margin: a4 };
    })({ width: l22.width, height: l22.height, position: i2 });
    u2.beginPath(), u2.roundRect(a3.x, a3.y, a3.width, a3.height, Math.ceil(3.33 * a3.width / 100)), u2.clip();
    let n3 = Math.min(e3.displayWidth, e3.displayHeight);
    u2.drawImage(e3, (e3.displayWidth - n3) / 2, (e3.displayHeight - n3) / 2, n3, n3, a3.x, a3.y, a3.width, a3.height), u2.restore();
    let r3 = new VideoFrame(l22, { timestamp: e3.timestamp });
    e3.close(), t3.enqueue(r3);
  } });
  m2.readable.pipeThrough(f2).pipeTo(p2.writable);
  let g2 = new MediaStream([p2]);
  if (s2.length) {
    let e3 = new AudioContext(), t3 = s2.map((t4) => e3.createMediaStreamSource(new MediaStream([t4]))).reduce((e4, t4) => (t4.connect(e4), e4), e3.createMediaStreamDestination());
    g2.addTrack(t3.stream.getAudioTracks()[0]);
  }
  return g2;
}
function N(e2) {
  let t2 = (e3, t3) => [Math.trunc(e3 / t3), e3 % t3], a2, n2;
  return [a2, e2] = t2(e2, 36e5), [n2, e2] = t2(e2, 6e4), [a2, n2, e2 = Math.trunc(e2 / 1e3)].map((e3) => ((e3 < 0 ? 0 : e3) || 0).toString().padStart(2, "0")).join(":");
}
var W2, H2, q, $ = { exports: {} }, G = r2((W2 || (W2 = 1, q = function() {
  var e2 = { 172351395: { name: "EBML", type: "Container" }, 646: { name: "EBMLVersion", type: "Uint" }, 759: { name: "EBMLReadVersion", type: "Uint" }, 754: { name: "EBMLMaxIDLength", type: "Uint" }, 755: { name: "EBMLMaxSizeLength", type: "Uint" }, 642: { name: "DocType", type: "String" }, 647: { name: "DocTypeVersion", type: "Uint" }, 645: { name: "DocTypeReadVersion", type: "Uint" }, 108: { name: "Void", type: "Binary" }, 63: { name: "CRC-32", type: "Binary" }, 190023271: { name: "SignatureSlot", type: "Container" }, 16010: { name: "SignatureAlgo", type: "Uint" }, 16026: { name: "SignatureHash", type: "Uint" }, 16037: { name: "SignaturePublicKey", type: "Binary" }, 16053: { name: "Signature", type: "Binary" }, 15963: { name: "SignatureElements", type: "Container" }, 15995: { name: "SignatureElementList", type: "Container" }, 9522: { name: "SignedElement", type: "Binary" }, 139690087: { name: "Segment", type: "Container" }, 21863284: { name: "SeekHead", type: "Container" }, 3515: { name: "Seek", type: "Container" }, 5035: { name: "SeekID", type: "Binary" }, 5036: { name: "SeekPosition", type: "Uint" }, 88713574: { name: "Info", type: "Container" }, 13220: { name: "SegmentUID", type: "Binary" }, 13188: { name: "SegmentFilename", type: "String" }, 1882403: { name: "PrevUID", type: "Binary" }, 1868715: { name: "PrevFilename", type: "String" }, 2013475: { name: "NextUID", type: "Binary" }, 1999803: { name: "NextFilename", type: "String" }, 1092: { name: "SegmentFamily", type: "Binary" }, 10532: { name: "ChapterTranslate", type: "Container" }, 10748: { name: "ChapterTranslateEditionUID", type: "Uint" }, 10687: { name: "ChapterTranslateCodec", type: "Uint" }, 10661: { name: "ChapterTranslateID", type: "Binary" }, 710577: { name: "TimecodeScale", type: "Uint" }, 1161: { name: "Duration", type: "Float" }, 1121: { name: "DateUTC", type: "Date" }, 15273: { name: "Title", type: "String" }, 3456: { name: "MuxingApp", type: "String" }, 5953: { name: "WritingApp", type: "String" }, 103: { name: "Timecode", type: "Uint" }, 6228: { name: "SilentTracks", type: "Container" }, 6359: { name: "SilentTrackNumber", type: "Uint" }, 39: { name: "Position", type: "Uint" }, 43: { name: "PrevSize", type: "Uint" }, 35: { name: "SimpleBlock", type: "Binary" }, 32: { name: "BlockGroup", type: "Container" }, 33: { name: "Block", type: "Binary" }, 34: { name: "BlockVirtual", type: "Binary" }, 13729: { name: "BlockAdditions", type: "Container" }, 38: { name: "BlockMore", type: "Container" }, 110: { name: "BlockAddID", type: "Uint" }, 37: { name: "BlockAdditional", type: "Binary" }, 27: { name: "BlockDuration", type: "Uint" }, 122: { name: "ReferencePriority", type: "Uint" }, 123: { name: "ReferenceBlock", type: "Int" }, 125: { name: "ReferenceVirtual", type: "Int" }, 36: { name: "CodecState", type: "Binary" }, 13730: { name: "DiscardPadding", type: "Int" }, 14: { name: "Slices", type: "Container" }, 104: { name: "TimeSlice", type: "Container" }, 76: { name: "LaceNumber", type: "Uint" }, 77: { name: "FrameNumber", type: "Uint" }, 75: { name: "BlockAdditionID", type: "Uint" }, 78: { name: "Delay", type: "Uint" }, 79: { name: "SliceDuration", type: "Uint" }, 72: { name: "ReferenceFrame", type: "Container" }, 73: { name: "ReferenceOffset", type: "Uint" }, 74: { name: "ReferenceTimeCode", type: "Uint" }, 47: { name: "EncryptedBlock", type: "Binary" }, 106212971: { name: "Tracks", type: "Container" }, 46: { name: "TrackEntry", type: "Container" }, 87: { name: "TrackNumber", type: "Uint" }, 13253: { name: "TrackUID", type: "Uint" }, 3: { name: "TrackType", type: "Uint" }, 57: { name: "FlagEnabled", type: "Uint" }, 8: { name: "FlagDefault", type: "Uint" }, 5546: { name: "FlagForced", type: "Uint" }, 28: { name: "FlagLacing", type: "Uint" }, 11751: { name: "MinCache", type: "Uint" }, 11768: { name: "MaxCache", type: "Uint" }, 254851: { name: "DefaultDuration", type: "Uint" }, 216698: { name: "DefaultDecodedFieldDuration", type: "Uint" }, 209231: { name: "TrackTimecodeScale", type: "Float" }, 4991: { name: "TrackOffset", type: "Int" }, 5614: { name: "MaxBlockAdditionID", type: "Uint" }, 4974: { name: "Name", type: "String" }, 177564: { name: "Language", type: "String" }, 6: { name: "CodecID", type: "String" }, 9122: { name: "CodecPrivate", type: "Binary" }, 362120: { name: "CodecName", type: "String" }, 13382: { name: "AttachmentLink", type: "Uint" }, 1742487: { name: "CodecSettings", type: "String" }, 1785920: { name: "CodecInfoURL", type: "String" }, 438848: { name: "CodecDownloadURL", type: "String" }, 42: { name: "CodecDecodeAll", type: "Uint" }, 12203: { name: "TrackOverlay", type: "Uint" }, 5802: { name: "CodecDelay", type: "Uint" }, 5819: { name: "SeekPreRoll", type: "Uint" }, 9764: { name: "TrackTranslate", type: "Container" }, 9980: { name: "TrackTranslateEditionUID", type: "Uint" }, 9919: { name: "TrackTranslateCodec", type: "Uint" }, 9893: { name: "TrackTranslateTrackID", type: "Binary" }, 96: { name: "Video", type: "Container" }, 26: { name: "FlagInterlaced", type: "Uint" }, 5048: { name: "StereoMode", type: "Uint" }, 5056: { name: "AlphaMode", type: "Uint" }, 5049: { name: "OldStereoMode", type: "Uint" }, 48: { name: "PixelWidth", type: "Uint" }, 58: { name: "PixelHeight", type: "Uint" }, 5290: { name: "PixelCropBottom", type: "Uint" }, 5307: { name: "PixelCropTop", type: "Uint" }, 5324: { name: "PixelCropLeft", type: "Uint" }, 5341: { name: "PixelCropRight", type: "Uint" }, 5296: { name: "DisplayWidth", type: "Uint" }, 5306: { name: "DisplayHeight", type: "Uint" }, 5298: { name: "DisplayUnit", type: "Uint" }, 5299: { name: "AspectRatioType", type: "Uint" }, 963876: { name: "ColourSpace", type: "Binary" }, 1029411: { name: "GammaValue", type: "Float" }, 230371: { name: "FrameRate", type: "Float" }, 97: { name: "Audio", type: "Container" }, 53: { name: "SamplingFrequency", type: "Float" }, 14517: { name: "OutputSamplingFrequency", type: "Float" }, 31: { name: "Channels", type: "Uint" }, 15739: { name: "ChannelPositions", type: "Binary" }, 8804: { name: "BitDepth", type: "Uint" }, 98: { name: "TrackOperation", type: "Container" }, 99: { name: "TrackCombinePlanes", type: "Container" }, 100: { name: "TrackPlane", type: "Container" }, 101: { name: "TrackPlaneUID", type: "Uint" }, 102: { name: "TrackPlaneType", type: "Uint" }, 105: { name: "TrackJoinBlocks", type: "Container" }, 109: { name: "TrackJoinUID", type: "Uint" }, 64: { name: "TrickTrackUID", type: "Uint" }, 65: { name: "TrickTrackSegmentUID", type: "Binary" }, 70: { name: "TrickTrackFlag", type: "Uint" }, 71: { name: "TrickMasterTrackUID", type: "Uint" }, 68: { name: "TrickMasterTrackSegmentUID", type: "Binary" }, 11648: { name: "ContentEncodings", type: "Container" }, 8768: { name: "ContentEncoding", type: "Container" }, 4145: { name: "ContentEncodingOrder", type: "Uint" }, 4146: { name: "ContentEncodingScope", type: "Uint" }, 4147: { name: "ContentEncodingType", type: "Uint" }, 4148: { name: "ContentCompression", type: "Container" }, 596: { name: "ContentCompAlgo", type: "Uint" }, 597: { name: "ContentCompSettings", type: "Binary" }, 4149: { name: "ContentEncryption", type: "Container" }, 2017: { name: "ContentEncAlgo", type: "Uint" }, 2018: { name: "ContentEncKeyID", type: "Binary" }, 2019: { name: "ContentSignature", type: "Binary" }, 2020: { name: "ContentSigKeyID", type: "Binary" }, 2021: { name: "ContentSigAlgo", type: "Uint" }, 2022: { name: "ContentSigHashAlgo", type: "Uint" }, 206814059: { name: "Cues", type: "Container" }, 59: { name: "CuePoint", type: "Container" }, 51: { name: "CueTime", type: "Uint" }, 55: { name: "CueTrackPositions", type: "Container" }, 119: { name: "CueTrack", type: "Uint" }, 113: { name: "CueClusterPosition", type: "Uint" }, 112: { name: "CueRelativePosition", type: "Uint" }, 50: { name: "CueDuration", type: "Uint" }, 4984: { name: "CueBlockNumber", type: "Uint" }, 106: { name: "CueCodecState", type: "Uint" }, 91: { name: "CueReference", type: "Container" }, 22: { name: "CueRefTime", type: "Uint" }, 23: { name: "CueRefCluster", type: "Uint" }, 4959: { name: "CueRefNumber", type: "Uint" }, 107: { name: "CueRefCodecState", type: "Uint" }, 155296873: { name: "Attachments", type: "Container" }, 8615: { name: "AttachedFile", type: "Container" }, 1662: { name: "FileDescription", type: "String" }, 1646: { name: "FileName", type: "String" }, 1632: { name: "FileMimeType", type: "String" }, 1628: { name: "FileData", type: "Binary" }, 1710: { name: "FileUID", type: "Uint" }, 1653: { name: "FileReferral", type: "Binary" }, 1633: { name: "FileUsedStartTime", type: "Uint" }, 1634: { name: "FileUsedEndTime", type: "Uint" }, 4433776: { name: "Chapters", type: "Container" }, 1465: { name: "EditionEntry", type: "Container" }, 1468: { name: "EditionUID", type: "Uint" }, 1469: { name: "EditionFlagHidden", type: "Uint" }, 1499: { name: "EditionFlagDefault", type: "Uint" }, 1501: { name: "EditionFlagOrdered", type: "Uint" }, 54: { name: "ChapterAtom", type: "Container" }, 13252: { name: "ChapterUID", type: "Uint" }, 5716: { name: "ChapterStringUID", type: "String" }, 17: { name: "ChapterTimeStart", type: "Uint" }, 18: { name: "ChapterTimeEnd", type: "Uint" }, 24: { name: "ChapterFlagHidden", type: "Uint" }, 1432: { name: "ChapterFlagEnabled", type: "Uint" }, 11879: { name: "ChapterSegmentUID", type: "Binary" }, 11964: { name: "ChapterSegmentEditionUID", type: "Uint" }, 9155: { name: "ChapterPhysicalEquiv", type: "Uint" }, 15: { name: "ChapterTrack", type: "Container" }, 9: { name: "ChapterTrackNumber", type: "Uint" }, 0: { name: "ChapterDisplay", type: "Container" }, 5: { name: "ChapString", type: "String" }, 892: { name: "ChapLanguage", type: "String" }, 894: { name: "ChapCountry", type: "String" }, 10564: { name: "ChapProcess", type: "Container" }, 10581: { name: "ChapProcessCodecID", type: "Uint" }, 1293: { name: "ChapProcessPrivate", type: "Binary" }, 10513: { name: "ChapProcessCommand", type: "Container" }, 10530: { name: "ChapProcessTime", type: "Uint" }, 10547: { name: "ChapProcessData", type: "Binary" }, 39109479: { name: "Tags", type: "Container" }, 13171: { name: "Tag", type: "Container" }, 9152: { name: "Targets", type: "Container" }, 10442: { name: "TargetTypeValue", type: "Uint" }, 9162: { name: "TargetType", type: "String" }, 9157: { name: "TagTrackUID", type: "Uint" }, 9161: { name: "TagEditionUID", type: "Uint" }, 9156: { name: "TagChapterUID", type: "Uint" }, 9158: { name: "TagAttachmentUID", type: "Uint" }, 10184: { name: "SimpleTag", type: "Container" }, 1443: { name: "TagName", type: "String" }, 1146: { name: "TagLanguage", type: "String" }, 1156: { name: "TagDefault", type: "Uint" }, 1159: { name: "TagString", type: "String" }, 1157: { name: "TagBinary", type: "Binary" } };
  function t2(e3, t3) {
    e3.prototype = Object.create(t3.prototype), e3.prototype.constructor = e3;
  }
  function a2(e3, t3) {
    this.name = e3 || "Unknown", this.type = t3 || "Unknown";
  }
  function n2(e3, t3) {
    a2.call(this, e3, t3 || "Uint");
  }
  function i2(e3) {
    return e3.length % 2 == 1 ? "0" + e3 : e3;
  }
  function r22(e3, t3) {
    a2.call(this, e3, t3 || "Float");
  }
  function o2(e3, t3) {
    a2.call(this, e3, t3 || "Container");
  }
  function s2(e3) {
    o2.call(this, "File", "File"), this.setSource(e3);
  }
  function c2(e3, t3, a3, n3) {
    if (typeof a3 == "object" && (n3 = a3, a3 = void 0), !a3) return new Promise(function(a4) {
      c2(e3, t3, a4, n3);
    });
    try {
      var i3 = new FileReader();
      i3.onloadend = function() {
        try {
          var r3 = new s2(new Uint8Array(i3.result));
          r3.fixDuration(t3, n3) && (e3 = r3.toBlob(e3.type));
        } catch {
        }
        a3(e3);
      }, i3.readAsArrayBuffer(e3);
    } catch {
      a3(e3);
    }
  }
  return a2.prototype.updateBySource = function() {
  }, a2.prototype.setSource = function(e3) {
    this.source = e3, this.updateBySource();
  }, a2.prototype.updateByData = function() {
  }, a2.prototype.setData = function(e3) {
    this.data = e3, this.updateByData();
  }, t2(n2, a2), n2.prototype.updateBySource = function() {
    this.data = "";
    for (var e3 = 0; e3 < this.source.length; e3++) {
      var t3 = this.source[e3].toString(16);
      this.data += i2(t3);
    }
  }, n2.prototype.updateByData = function() {
    var e3 = this.data.length / 2;
    this.source = new Uint8Array(e3);
    for (var t3 = 0; t3 < e3; t3++) {
      var a3 = this.data.substr(2 * t3, 2);
      this.source[t3] = parseInt(a3, 16);
    }
  }, n2.prototype.getValue = function() {
    return parseInt(this.data, 16);
  }, n2.prototype.setValue = function(e3) {
    this.setData(i2(e3.toString(16)));
  }, t2(r22, a2), r22.prototype.getFloatArrayType = function() {
    return this.source && this.source.length === 4 ? Float32Array : Float64Array;
  }, r22.prototype.updateBySource = function() {
    var e3 = this.source.reverse(), t3 = new (this.getFloatArrayType())(e3.buffer);
    this.data = t3[0];
  }, r22.prototype.updateByData = function() {
    var e3 = new (this.getFloatArrayType())([this.data]), t3 = new Uint8Array(e3.buffer);
    this.source = t3.reverse();
  }, r22.prototype.getValue = function() {
    return this.data;
  }, r22.prototype.setValue = function(e3) {
    this.setData(e3);
  }, t2(o2, a2), o2.prototype.readByte = function() {
    return this.source[this.offset++];
  }, o2.prototype.readUint = function() {
    for (var e3 = this.readByte(), t3 = 8 - e3.toString(2).length, a3 = e3 - (1 << 7 - t3), n3 = 0; n3 < t3; n3++) a3 *= 256, a3 += this.readByte();
    return a3;
  }, o2.prototype.updateBySource = function() {
    for (this.data = [], this.offset = 0; this.offset < this.source.length; this.offset = s3) {
      var t3 = this.readUint(), i3 = this.readUint(), s3 = Math.min(this.offset + i3, this.source.length), c3 = this.source.slice(this.offset, s3), m2 = e2[t3] || { name: "Unknown", type: "Unknown" }, p2 = a2;
      switch (m2.type) {
        case "Container":
          p2 = o2;
          break;
        case "Uint":
          p2 = n2;
          break;
        case "Float":
          p2 = r22;
      }
      var d2 = new p2(m2.name, m2.type);
      d2.setSource(c3), this.data.push({ id: t3, idHex: t3.toString(16), data: d2 });
    }
  }, o2.prototype.writeUint = function(e3, t3) {
    for (var a3 = 1, n3 = 128; e3 >= n3 && a3 < 8; a3++, n3 *= 128) ;
    if (!t3) for (var i3 = n3 + e3, r3 = a3 - 1; r3 >= 0; r3--) {
      var o3 = i3 % 256;
      this.source[this.offset + r3] = o3, i3 = (i3 - o3) / 256;
    }
    this.offset += a3;
  }, o2.prototype.writeSections = function(e3) {
    this.offset = 0;
    for (var t3 = 0; t3 < this.data.length; t3++) {
      var a3 = this.data[t3], n3 = a3.data.source, i3 = n3.length;
      this.writeUint(a3.id, e3), this.writeUint(i3, e3), e3 || this.source.set(n3, this.offset), this.offset += i3;
    }
    return this.offset;
  }, o2.prototype.updateByData = function() {
    var e3 = this.writeSections("draft");
    this.source = new Uint8Array(e3), this.writeSections();
  }, o2.prototype.getSectionById = function(e3) {
    for (var t3 = 0; t3 < this.data.length; t3++) {
      var a3 = this.data[t3];
      if (a3.id === e3) return a3.data;
    }
    return null;
  }, t2(s2, o2), s2.prototype.fixDuration = function(e3, t3) {
    var a3 = t3 && t3.logger;
    a3 === void 0 ? a3 = function(e4) {
    } : a3 || (a3 = function() {
    });
    var n3 = this.getSectionById(139690087);
    if (!n3) return a3("[fix-webm-duration] Segment section is missing"), !1;
    var i3 = n3.getSectionById(88713574);
    if (!i3) return a3("[fix-webm-duration] Info section is missing"), !1;
    var o3 = i3.getSectionById(710577);
    if (!o3) return a3("[fix-webm-duration] TimecodeScale section is missing"), !1;
    var s3 = i3.getSectionById(1161);
    if (s3) {
      if (!(s3.getValue() <= 0)) return a3(`[fix-webm-duration] Duration section is present, and the value is ${s3.getValue()}`), !1;
      a3(`[fix-webm-duration] Duration section is present, but the value is ${s3.getValue()}`), s3.setValue(e3);
    } else a3("[fix-webm-duration] Duration section is missing"), (s3 = new r22("Duration", "Float")).setValue(e3), i3.data.push({ id: 1161, data: s3 });
    return o3.setValue(1e6), i3.updateByData(), n3.updateByData(), this.updateByData(), !0;
  }, s2.prototype.toBlob = function(e3) {
    return new Blob([this.source.buffer], { type: e3 || "video/webm" });
  }, c2.default = c2, c2;
}, (H2 = $).exports ? H2.exports = q() : window.ysFixWebmDuration = q()), $.exports)), K = null;
function J(e2) {
  K || (K = e2);
}
function Z2() {
  K && K.makePip();
}
function Q() {
  K && K.closePip();
}
function X(e2, t2) {
  t2 = t2 || e2.getBoundingClientRect();
  let a2 = null, n2 = !0, i2 = document.createComment("picture-in-picture");
  return e2.replaceWith(i2), window.documentPictureInPicture.requestWindow({ width: t2.width, height: t2.height, preferInitialWindowPlacement: !0 }).then((t3) => {
    a2 = t3, a2.onpagehide = () => {
      n2 = !1, i2.replaceWith(e2), e2.classList.remove("picture-in-picture");
    }, (function() {
      if (!a2) return;
      let t4 = [...document.styleSheets].map((e3) => [...e3.cssRules].map((e4) => e4.cssText)).flat().filter(Boolean).join(`
`), n3 = document.createElement("style");
      n3.textContent = t4, a2.document.head.innerHTML = "", a2.document.head.appendChild(n3), a2.document.body.appendChild(e2), e2.classList.add("picture-in-picture"), a2.document.title = "录制中...", Array.from(a2.document.body.querySelectorAll("video")).map((e3) => e3.play());
    })();
  }), { destroy() {
    a2 && a2.close(), i2.replaceWith(e2), e2.classList.remove("picture-in-picture");
  }, get active() {
    return n2;
  } };
}
function Y() {
  var e2;
  return !!((e2 = window.documentPictureInPicture) != null && e2.requestWindow);
}
var ee = b("lusunSettings", { cameraId: "", microphoneId: "", microphoneStandalone: !1, cameraMergePosition: "rb", countdownTime: 3 }, { listenToStorageChanges: !1 }), te = Et(null), ae = c(() => f.get("lusunSettings") || {}), ne = dt({ streams: [], medias: [], files: [], recordType: "", microphonePermission: !1, cameraPermission: !1, get enabledTypes() {
  let e2 = (ne.recordType || "").split(",").filter(Boolean);
  ne.recordType && ee.value.microphoneId !== "none" && !e2.includes("microphone") && (ne.recordType === "screen" ? ne.microphonePermission && e2.push("microphone") : e2.push("microphone"));
  let t2 = {};
  return e2.map((e3) => {
    t2[e3] = !0;
  }), t2;
}, start: !1, paused: !1, finished: !1, startTimestamp: -1, loadStream: 0, cameras: [], microphones: [], device: null, reset: () => {
  Object.assign(ne, { start: !1, paused: !1, finished: !1, startTimestamp: -1 });
}, pause: () => {
  ne.medias.forEach((e2) => {
    e2.recorder.pause();
  }), ne.paused = !0;
}, resume: () => {
  ne.medias.forEach((e2) => {
    e2.recorder.resume();
  }), ne.paused = !1;
}, stop: () => {
  ne.finished = !0, window.focus(), ne.medias.forEach((e2) => {
    e2.recorder.state !== "inactive" && e2.recorder.stop();
  });
} });
async function ie() {
  var t2, a2, n2, i2;
  Z2();
  let { streams: r22, enabledTypes: o2 } = ne;
  if (!r22.length) return aO.error("请选择要录制的媒体");
  let s2 = r22.reduce((e2, t3) => (e2[t3.type] = t3.stream, e2), {});
  await Promise.all([o2.microphone && !((t2 = s2.microphone) != null && t2.active) ? se() : null, o2.camera && !((a2 = s2.camera) != null && a2.active) ? oe() : null, !o2.screen || (n2 = s2.screen) != null && n2.active && ((i2 = s2.screen) == null ? void 0 : i2.getVideoTracks()[0].readyState) !== "ended" ? null : ce()]).catch((e2) => (Q(), Promise.reject(e2))), me2(), ne.reset(), (async function() {
    ne.medias = [], ne.files.forEach((e3) => {
      URL.revokeObjectURL(e3.url);
    }), ne.files = [];
    let e2 = ne.streams.reduce((e3, t3) => ((ne.enabledTypes[t3.type] || t3.type === "merge") && (e3[t3.type] = t3.stream), e3), {});
    if (ne.enabledTypes.camera) if (!ee.value.microphoneStandalone && ne.enabledTypes.microphone) {
      let t3 = e2.camera, a3 = e2.microphone, n3 = new MediaStream([...t3.getTracks(), ...a3.getTracks()]);
      ne.medias.push({ type: "camera", recorder: re(n3, "camera") });
    } else ne.medias.push({ type: "camera", recorder: re(e2.camera, "camera") });
    if (e2.microphone && ne.medias.push({ type: "microphone", recorder: re(e2.microphone, "microphone") }), e2.screen) {
      let t3 = e2.screen;
      ne.recordType === "screen" && ne.enabledTypes.microphone && (t3 = (function(e3, ...t4) {
        let a3 = e3.getVideoTracks()[0];
        e3.getAudioTracks().forEach((e4) => {
          t4.push(e4);
        });
        let n3 = new MediaStream([a3]);
        if (t4.length) {
          let a4 = new AudioContext(), i3 = t4.map((e4) => a4.createMediaStreamSource(new MediaStream([e4]))).reduce((e4, t5) => (t5.connect(e4), e4), a4.createMediaStreamDestination()).stream.getAudioTracks()[0];
          i3.onended = () => {
            [...e3.getTracks(), ...t4].forEach((e4) => {
              e4.stop();
            });
          }, n3.addTrack(i3);
        }
        return n3;
      })(e2.screen, ...e2.microphone.getAudioTracks()), t3.sourceStream = e2.screen), ne.medias.push({ type: "screen", recorder: re(t3, "screen") });
    }
    e2.merge && ne.medias.push({ type: "merge", recorder: re(e2.merge, "merge") }), ee.value.countdownTime > 0 && await new Promise((e3) => {
      te.value = () => {
        te.value = null, e3();
      };
    }), ne.startTimestamp = Date.now(), ne.start = !0, ne.medias.forEach((e3) => {
      e3.recorder.startTimestamp = Date.now(), e3.recorder.start();
    });
  })();
}
function re(e2, t2) {
  let a2 = t2 === "microphone" ? "audio/webm" : MediaRecorder.isTypeSupported("video/webm;codecs=h264") ? "video/webm;codecs=h264" : "video/webm", n2 = new MediaRecorder(e2, { mimeType: a2 });
  return n2.chunks = [], n2.ondataavailable = (e3) => {
    e3.data.size > 0 && n2.chunks.push(e3.data);
  }, n2.onstop = () => {
    n2.stream.getTracks().forEach((t3) => {
      t3.readyState === "live" && t3.stop(), e2.sourceStream && e2.sourceStream.getTracks().forEach((e3) => e3.readyState === "live" && e3.stop());
    });
    let i2 = new Blob(n2.chunks, { type: n2.mimeType });
    G(i2, Date.now() - n2.startTimestamp, (e3) => {
      ne.files.push({ type: t2, blob: e3, url: URL.createObjectURL(e3), mimeType: a2 }), (function() {
        let e4 = ne.files.reduce((e5, t3) => (e5[t3.type] = t3, e5), {});
        ne.files = [e4.screen, e4.camera, e4.merge, e4.microphone].filter(Boolean);
      })();
    }, { logger: !1 });
  }, wt(n2);
}
async function oe() {
  if (ee.value.cameraId) {
    ue("camera"), ne.loadStream++;
    try {
      let e2 = await (async function(e3) {
        return navigator.mediaDevices.getUserMedia({ video: { deviceId: { exact: e3 }, aspectRatio: 1.7777777777777777, width: 3840, height: 2160 }, audio: !1 });
      })(ee.value.cameraId), [t2] = e2.getTracks();
      if (e2.getTracks()[0].onended = () => {
        ne.start && ne.stop();
      }, t2) {
        let e3 = ne.cameras.filter((e4) => e4.label == t2.label);
        e3.length === 1 && (ee.value.cameraId = e3[0].deviceId);
      }
      ne.streams.push({ stream: wt(e2), type: "camera" }), le();
    } catch {
    }
    ne.loadStream--;
  }
}
async function se() {
  if (ee.value.microphoneId) {
    ue("microphone"), ne.loadStream++;
    try {
      let e2 = await (async function(e3) {
        return navigator.mediaDevices.getUserMedia({ audio: { deviceId: { exact: e3 } }, video: !1 });
      })(ee.value.microphoneId), [t2] = e2.getTracks();
      if (e2.getTracks()[0].onended = () => {
        ne.start && ne.stop();
      }, t2) {
        let e3 = ne.microphones.filter((e4) => e4.label == t2.label);
        e3.length === 1 && (ee.value.microphoneId = e3[0].deviceId);
      }
      ne.streams.push({ stream: wt(e2), type: "microphone" }), le();
    } catch {
    }
    ne.loadStream--;
  }
}
async function ce() {
  ue("screen"), ne.loadStream++;
  try {
    let t2 = await ((e2 = window.chrome) != null && e2.desktopCapture ? new Promise((e3, t3) => {
      window.chrome.desktopCapture.chooseDesktopMedia(["screen", "window", "audio"], (a2, { canRequestAudioTrack: n2 }) => {
        if (!a2) return t3();
        let i2 = { mandatory: { chromeMediaSource: "desktop", chromeMediaSourceId: a2 } }, r22 = { video: i2 };
        return n2 && (r22.audio = i2), navigator.mediaDevices.getUserMedia(r22).then(e3, t3);
      });
    }) : window.navigator.mediaDevices.getDisplayMedia({ audio: !0, video: { width: { ideal: 3840 }, height: { ideal: 2160 }, frameRate: { ideal: 60 }, displaySurface: "monitor" }, systemAudio: "include" }));
    t2.getVideoTracks()[0].onended = () => {
      ne.start && ne.stop(), t2.getTracks().forEach((e3) => e3.stop());
    }, ne.streams.push({ stream: wt(t2), type: "screen" }), le();
  } catch (t2) {
    throw t2;
  } finally {
    ne.loadStream--;
  }
  var e2;
}
function me2() {
  var e2, t2, a2;
  let n2 = ne.streams.reduce((e3, t3) => (e3[t3.type] = t3.stream, e3), {}), i2 = !!(O() && ne.enabledTypes.camera && ne.enabledTypes.screen && n2.screen && n2.camera), r22 = [(e2 = n2.screen) == null ? void 0 : e2.id, (t2 = n2.camera) == null ? void 0 : t2.id, (a2 = n2.microphone) == null ? void 0 : a2.id, ee.value.cameraMergePosition || "rb"].map((e3) => e3 || "").join("-"), o2 = () => {
    n2.merge.getTracks().forEach((e3) => {
      n2.merge.removeTrack(e3);
    }), ne.streams.some((e3, t3) => {
      if (e3.type === "merge") return ne.streams.splice(t3, 1), !0;
    });
  };
  if (!i2 || n2.merge && n2.merge.id === r22) n2.merge && o2();
  else {
    if (n2.merge && o2(), [n2.screen, n2.camera, n2.microphone].filter(Boolean).some((e4) => e4.getTracks()[0].readyState === "ended")) return;
    let e3 = z({ largeStream: n2.screen, smallStream: n2.camera, microphoneStream: n2.microphone, position: ee.value.cameraMergePosition || "rb" });
    e3.mergeId = r22, ne.streams.push({ stream: wt(e3), type: "merge" });
  }
}
function pe(e2) {
  ne.enabledTypes.camera && oe();
}
function de(e2) {
  ne.enabledTypes.microphone && se();
}
function le() {
  let e2 = ne.streams.reduce((e3, t2) => (e3[t2.type] = t2, e3), {});
  ne.streams = [e2.screen, e2.camera, e2.merge, e2.microphone].filter(Boolean);
}
function ue(e2) {
  ne.streams.some((t2, a2) => {
    if (t2.type === e2) return t2.stream.getTracks().forEach((e3) => e3.stop()), ne.streams.splice(a2, 1), !0;
  });
}
async function ye() {
  ne.cameraPermission = await V("camera"), ne.microphonePermission = await V("microphone"), ne.cameras = await _("videoinput"), ne.microphones = await _("audioinput");
}
async function he() {
  try {
    let e2 = await navigator.mediaDevices.enumerateDevices();
    ne.device = { audio: e2.some((e3) => e3.kind === "audioinput"), video: e2.some((e3) => e3.kind === "videoinput") };
  } catch {
  }
}
async function fe() {
  await ye(), navigator.userAgent.toLowerCase().includes("firefox") ? await Promise.all([ne.enabledTypes.camera ? ge() : null, ne.enabledTypes.microphone ? ve2() : null, ne.enabledTypes.screen ? Te() : null]).catch((e3) => {
    ne.recordType = "", Q();
  }) : await (async () => {
    ne.enabledTypes.camera && await ge(), ne.enabledTypes.microphone && await ve2(), ne.enabledTypes.screen && await Te();
  })().catch((e3) => {
    ne.recordType = "", Q();
  }), ye(), me2();
  let e2 = Object.keys(ne.enabledTypes);
  ne.streams = ne.streams.filter((t2) => {
    let a2 = e2.includes(t2.type) || t2.type === "merge";
    return a2 || t2.stream.getTracks().forEach((e3) => e3.stop()), a2;
  });
}
async function ge() {
  let e2 = await j(!0, !0);
  e2.cameraId && (ee.value.cameraId = e2.cameraId), e2.microphoneId && (ee.value.microphoneId = e2.microphoneId), ne.cameras = await _("videoinput"), Ce(), await oe();
}
async function ve2() {
  let e2 = await j(!1, !0);
  e2.microphoneId && (ee.value.microphoneId = e2.microphoneId), ne.microphones = await _("audioinput"), Ce(), await se();
}
async function Te() {
  await ce();
}
function Ce() {
  var e2, t2, a2, n2, i2, r22, o2, s2;
  if (ne.cameras.length && ne.enabledTypes.camera) {
    let i3 = ne.cameras.reduce((e3, t3) => (e3[t3.deviceId] = t3, e3), {});
    ee.value.cameraId = ((e2 = i3[ee.value.cameraId]) == null ? void 0 : e2.deviceId) || ((t2 = i3[ae.value.cameraId]) == null ? void 0 : t2.deviceId) || ((a2 = i3.default) == null ? void 0 : a2.deviceId) || ((n2 = ne.cameras[0]) == null ? void 0 : n2.deviceId);
  }
  if (ne.microphones.length && ne.enabledTypes.microphone) {
    let e3 = ne.microphones.reduce((e4, t3) => (e4[t3.deviceId] = t3, e4), {});
    ee.value.microphoneId = ((i2 = e3[ee.value.microphoneId]) == null ? void 0 : i2.deviceId) || ((r22 = e3[ae.value.microphoneId]) == null ? void 0 : r22.deviceId) || ((o2 = e3.default) == null ? void 0 : o2.deviceId) || ((s2 = ne.microphones[0]) == null ? void 0 : s2.deviceId);
  }
}
var Se = { class: "w-full h-full flex items-center justify-center absolute top-0 left-0 bg-[#22222E] z-10" }, Ue = { class: "flex items-center justify-center absolute m-auto count-container" }, we = /* @__PURE__ */ o({ __name: "countdown", props: { time: Number, fontSize: Number, animation: { type: Boolean, default: !0 } }, emits: ["end"], setup(e2, { emit: t2 }) {
  gi((e3) => ({ "7b6e616a": o2.value, "2ebc400e": s2.value.a, "2ebc400f": s2.value.b, "2ebc4010": s2.value.c }));
  let a2 = e2, n2 = t2, i2 = Et(Date.now()), r22 = Et(), o2 = $o(() => (a2.fontSize || 30) + "px"), s2 = $o(() => {
    let e3 = (a2.fontSize || 30) / 3;
    return { a: `0 0 ${8 * e3}px ${5 * e3}px rgba(255, 80, 101, 0.4)`, b: `0 0 ${10 * e3}px ${8 * e3}px rgba(255, 80, 101, 0.4)`, c: `0 0 ${10 * e3}px ${5 * e3}px rgba(255, 80, 101, 0.4)` };
  });
  return Pe(() => {
    r22.value = a2.time - Math.floor((Date.now() - i2.value) / 1e3);
  }), Fr(() => a2.time, () => {
    i2.value = Date.now();
  }), Fr(() => r22.value <= 0, (e3) => {
    e3 && n2("end");
  }, { immediate: !0 }), (t3, a3) => (Zr(), eo("div", Se, [io("div", Ue, [(Zr(), eo("div", { class: W(["count-wrap", { animation: e2.animation }]), key: r22.value }, [(Zr(), eo("div", { class: W(["z-10 relative count-number", { animation: e2.animation }]), key: r22.value }, Z(r22.value), 3))], 2))])]));
} }, [["__scopeId", "data-v-b7d48228"]]), ke = { key: 0, class: "video-preview h-[140px] bg-[#86868680]" }, be = ["srcObject"], De = { key: 1, class: "dark z-50 right-10 bottom-10 rounded-4xl px-2 py-2 h-10 bg-[#000000a3] shadow-2xl gap-2 flex items-center recording-bar" }, Ie = { key: 0, class: "flex w-6 h-6 relative" }, Be = { class: "text-white f13 font-bold w-10 text-center" }, Pe2 = /* @__PURE__ */ o({ __name: "recordingBar", setup(e2) {
  let n2 = Et(Date.now()), i2 = Et(), r22 = Et(), c2 = $o(() => {
    let e3 = ne.enabledTypes, t2 = {};
    return ne.streams.map((e4) => {
      t2[e4.type] = e4.stream;
    }), e3.camera && e3.screen ? t2.merge : e3.camera ? t2.camera : e3.screen ? t2.screen : null;
  }), m2 = Et();
  function d2() {
    var e3;
    Y() && ((e3 = m2.value) != null && e3.active || (m2.value && m2.value.destroy(), i2.value && (r22.value && r22.value.play(), m2.value = X(i2.value, { width: 145, height: ne.recordType !== "microphone" ? 180 : 40 }))));
  }
  function l22() {
    m2.value && (m2.value.destroy(), m2.value = null);
  }
  function B2() {
    window.focus(), L || ve({ component: "lusun" });
  }
  function M2() {
    te.value(), te.value = null;
  }
  return Fr(ne, function() {
    ne.start && ne.finished && m2.value && m2.value.destroy();
  }), Ee(() => {
    ne.start && !ne.finished && (n2.value = Date.now(), ne.start && n2.value - ne.startTimestamp >= 36e5 && ne.stop());
  }, 1e3), fs(() => {
    J({ makePip: d2, closePip: l22 });
  }), hs(() => {
    l22(), J(null);
  }), (e3, s2) => {
    var p2;
    let l3 = zw, u2 = ey;
    return Zr(), eo("div", { class: W({ hidden: Lt(me).visible || Lt(L) }) }, [io("div", { ref_key: "recordBar", ref: i2 }, [c2.value ? (Zr(), eo("div", ke, [io("video", { srcObject: c2.value, autoplay: "", muted: "", ref_key: "videoRef", ref: r22 }, null, 8, be)])) : po("", !0), Lt(ne).start && !Lt(ne).finished || Lt(te) ? (Zr(), eo("div", De, [Lt(te) ? (Zr(), eo("div", Ie, [lo(we, { time: Lt(ee).countdownTime, fontSize: 14, onEnd: M2 }, null, 8, ["time"])])) : (Zr(), eo(Hr, { key: 1 }, [lo(l3, { underline: "never", type: "danger", onClick: s2[0] || (s2[0] = (e4) => (B2(), void ne.stop())), title: "停止录制" }, { default: mn(() => [lo(Lt(R), { stroke: 2, class: "size-4.5" })]), _: 1 }), io("div", Be, Z(Lt(N)(n2.value - Lt(ne).startTimestamp).replace(/00:/, "")), 1), lo(l3, { underline: "never", onClick: s2[1] || (s2[1] = (e4) => (ne.stop(), ne.reset(), ne.medias = [], ne.files = [], void setTimeout(() => {
      ie();
    }, 0))), title: "重新录制" }, { default: mn(() => [lo(Lt(kt), { stroke: 2, class: "size-4.5" })]), _: 1 }), lo(u2, { direction: "vertical", style: { "--el-border-color": "#525252", margin: "0" } }), lo(l3, { underline: "never", onClick: s2[2] || (s2[2] = (e4) => B2()), title: "回到录制页面" }, { default: mn(() => [lo(Lt(Mt), { stroke: 2, class: "size-4.5" })]), _: 1 }), Lt(Y)() && !((p2 = m2.value) != null && p2.active) ? (Zr(), to(l3, { key: 0, underline: "never", onClick: s2[3] || (s2[3] = (e4) => d2()), title: "开启画中画" }, { default: mn(() => [lo(Lt(A), { stroke: 2, class: "size-4.5" })]), _: 1 })) : po("", !0)], 64))])) : po("", !0)], 512)], 2);
  };
} }, [["__scopeId", "data-v-82f90954"]]), Me = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: Pe2 }, Symbol.toStringTag, { value: "Module" }));

// output/native-current/Content-XJVbt9__.js
var pe2 = r("outline", "microphone-off", "MicrophoneOff", [["path", { d: "M3 3l18 18", key: "svg-0" }], ["path", { d: "M9 5a3 3 0 0 1 6 0v5a3 3 0 0 1 -.13 .874m-2 2a3 3 0 0 1 -3.87 -2.872v-1", key: "svg-1" }], ["path", { d: "M5 10a7 7 0 0 0 10.846 5.85m2 -2a6.967 6.967 0 0 0 1.152 -3.85", key: "svg-2" }], ["path", { d: "M8 21l8 0", key: "svg-3" }], ["path", { d: "M12 17l0 4", key: "svg-4" }]]), me3 = r("outline", "microphone", "Microphone", [["path", { d: "M9 5a3 3 0 0 1 3 -3a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3a3 3 0 0 1 -3 -3l0 -5", key: "svg-0" }], ["path", { d: "M5 10a7 7 0 0 0 14 0", key: "svg-1" }], ["path", { d: "M8 21l8 0", key: "svg-2" }], ["path", { d: "M12 17l0 4", key: "svg-3" }]]), ve3 = r("outline", "video-off", "VideoOff", [["path", { d: "M3 3l18 18", key: "svg-0" }], ["path", { d: "M15 11v-1l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -.675 .946", key: "svg-1" }], ["path", { d: "M10 6h3a2 2 0 0 1 2 2v3m0 4v1a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h1", key: "svg-2" }]]);
var fe2 = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: `<svg width="61" height="51" viewBox="0 0 61 51" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M33.6123 0C37.1711 0 40.3022 2.35101 41.2949 5.76855L41.5811 6.75293C41.8137 7.55384 42.5161 8.12063 43.3359 8.18848L43.502 8.19531H48C52.4183 8.19531 56 11.777 56 16.1953V32.417C55.0461 32.1471 54.0403 32 53 32C52.1398 32 51.3034 32.1023 50.5 32.2891V16.1953C50.5 14.8146 49.3807 13.6953 48 13.6953H43.502C40.1656 13.6953 37.2305 11.4911 36.2998 8.28711L36.0137 7.30273C35.7035 6.23469 34.7245 5.5 33.6123 5.5H22.3867C21.2747 5.50021 20.2965 6.23485 19.9863 7.30273L19.7002 8.28711C18.7695 11.4911 15.8344 13.6953 12.498 13.6953H8C6.61928 13.6953 5.5 14.8146 5.5 16.1953V40C5.5 41.3807 6.61929 42.5 8 42.5H42.0127C42.0053 42.6658 42 42.8324 42 43C42 44.801 42.4358 46.4995 43.2031 48H8L7.58789 47.9893C3.36114 47.7748 0 44.2801 0 40V16.1953C0 11.9152 3.36112 8.41955 7.58789 8.20508L8 8.19531H12.498L12.6641 8.18848C13.4292 8.12516 14.0921 7.6273 14.3662 6.91016L14.4189 6.75293L14.7051 5.76855C15.6977 2.35117 18.8281 0.000214174 22.3867 0H33.6123Z" fill="white"/>\r
<path opacity="0.3" d="M28 2H36.5L40.5 11H52V39H28V2Z" fill="url(#paint0_linear_318_2639)"/>\r
<circle cx="53" cy="43" r="8" fill="white"/>\r
<circle cx="53" cy="43" r="4" fill="#FF0000"/>\r
<defs>\r
<linearGradient id="paint0_linear_318_2639" x1="42" y1="2" x2="38.8665" y2="32.0819" gradientUnits="userSpaceOnUse">\r
<stop stop-color="white"/>\r
<stop offset="1" stop-color="white" stop-opacity="0"/>\r
</linearGradient>\r
</defs>\r
</svg>\r
` }, Symbol.toStringTag, { value: "Module" })), ye2 = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M65.418 17C69.5953 17 73 20.4092 73 24.5918V36.1831C73 37.7388 71.7388 39 70.1831 39C68.6274 39 67.3662 37.7388 67.3662 36.1831V24.5918C67.3662 23.52 66.4885 22.6416 65.418 22.6416H14.582C13.5115 22.6416 12.6338 23.52 12.6338 24.5918V56.4004C12.6338 57.4722 13.5115 58.3506 14.582 58.3506H36.1792C37.7371 58.3506 39 59.6135 39 61.1714C39 62.7293 37.7371 63.9922 36.1792 63.9922H14.582C10.4047 63.9922 7.00001 60.583 7 56.4004V24.5918C7 20.4092 10.4047 17 14.582 17H65.418Z" fill="white"/>\r
<path opacity="0.3" d="M42 22H71V59H32L42 22Z" fill="url(#paint0_linear_382_23)"/>\r
<path d="M78 58C78 62.4183 74.4183 66 70 66C65.5817 66 62 62.4183 62 58C62 53.5817 65.5817 50 70 50C74.4183 50 78 53.5817 78 58Z" fill="white"/>\r
<path d="M74 58C74 60.2091 72.2091 62 70 62C67.7909 62 66 60.2091 66 58C66 55.7909 67.7909 54 70 54C72.2091 54 74 55.7909 74 58Z" fill="#FF0000"/>\r
<path d="M61.0068 38C62.9133 38.0001 64.5903 39.2739 65.1221 41.125L65.2754 41.6582C65.4001 42.0919 65.7767 42.3988 66.2158 42.4355L66.3047 42.4395H68.7139C71.0808 42.4395 73 44.3792 73 46.7725V48.458C72.0692 48.1656 71.0798 48.0064 70.0537 48.001V46.7725C70.0537 46.0246 69.4535 45.418 68.7139 45.418H66.3047C64.5175 45.418 62.945 44.2245 62.4463 42.4893L62.293 41.9561C62.1268 41.3776 61.6025 40.9796 61.0068 40.9795H54.9932C54.3975 40.9796 53.8732 41.3776 53.707 41.9561L53.5537 42.4893C53.055 44.2245 51.4825 45.418 49.6953 45.418H47.2861C46.5465 45.418 45.9463 46.0246 45.9463 46.7725V59.667C45.9465 60.4147 46.5466 61.0205 47.2861 61.0205H60.4648C60.8082 62.1053 61.3308 63.1103 61.999 64H47.2861L47.0645 63.9941C44.8005 63.8777 43.0002 61.985 43 59.667V46.7725C43 44.4543 44.8003 42.5608 47.0645 42.4443L47.2861 42.4395H49.6953L49.7842 42.4355C50.194 42.4013 50.5494 42.1316 50.6963 41.7432L50.7246 41.6582L50.8779 41.125C51.4097 39.2739 53.0868 38.0001 54.9932 38H61.0068Z" fill="white"/>\r
<defs>\r
<linearGradient id="paint0_linear_382_23" x1="56.5" y1="22" x2="53.4723" y2="52.1038" gradientUnits="userSpaceOnUse">\r
<stop stop-color="white"/>\r
<stop offset="1" stop-color="white" stop-opacity="0"/>\r
</linearGradient>\r
</defs>\r
</svg>\r
` }, Symbol.toStringTag, { value: "Module" })), he2 = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: `<svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M43 35V27C43 23.6863 40.3137 21 37 21C33.6863 21 31 23.6863 31 27V35C31 38.3137 33.6863 41 37 41V46C31.1148 46 26.3094 41.3783 26.0146 35.5664L26 35V27C26 20.9249 30.9249 16 37 16C43.0751 16 48 20.9249 48 27V35L47.9854 35.5664C47.6906 41.3783 42.8852 46 37 46V41C40.3137 41 43 38.3137 43 35Z" fill="white"/>\r
<path opacity="0.3" d="M38 20H43V34H38V20Z" fill="url(#paint0_linear_318_2646)"/>\r
<path d="M52.6191 39.2383C53.0399 37.9233 54.4467 37.1984 55.7617 37.6191C57.0767 38.0399 57.8016 39.4467 57.3809 40.7617C54.6666 49.2439 46.7819 54.9998 37.876 55H36.124C27.2181 54.9998 19.3334 49.2439 16.6191 40.7617C16.1984 39.4467 16.9233 38.0399 18.2383 37.6191C19.5533 37.1984 20.9601 37.9233 21.3809 39.2383C23.4325 45.6495 29.3925 49.9998 36.124 50H37.876C44.6075 49.9998 50.5675 45.6495 52.6191 39.2383Z" fill="white"/>\r
<path d="M34.4063 54.8906C34.7772 54.3342 35.4016 54 36.0704 54H39.9296C40.5983 54 41.2228 54.3342 41.5937 54.8906L43.9635 58.4453C44.4066 59.1099 43.9302 60 43.1315 60H32.8685C32.0698 60 31.5934 59.1099 32.0365 58.4453L34.4063 54.8906Z" fill="white"/>\r
<defs>\r
<linearGradient id="paint0_linear_318_2646" x1="40.5" y1="20" x2="38.0784" y2="30.9714" gradientUnits="userSpaceOnUse">\r
<stop stop-color="white"/>\r
<stop offset="1" stop-color="white" stop-opacity="0"/>\r
</linearGradient>\r
</defs>\r
</svg>\r
` }, Symbol.toStringTag, { value: "Module" })), ge2 = /* @__PURE__ */ Object.freeze(Object.defineProperty({ __proto__: null, default: `<svg width="71" height="49" viewBox="0 0 71 49" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M58.418 0C62.5953 0 66 3.40918 66 7.5918V30.417C65.0461 30.1471 64.0403 30 63 30C62.092 30 61.2102 30.1119 60.3662 30.3193V7.5918C60.3662 6.51995 59.4885 5.6416 58.418 5.6416H7.58203C6.51154 5.6416 5.63379 6.51995 5.63379 7.5918V39.4004C5.6338 40.4722 6.51155 41.3506 7.58203 41.3506H52.0088C52.0739 43.4284 52.7143 45.3594 53.7773 46.9922H7.58203C3.40472 46.9922 6.2105e-06 43.583 0 39.4004V7.5918C0 3.40918 3.40471 0 7.58203 0H58.418Z" fill="white"/>\r
<rect opacity="0.3" x="34" y="5" width="28" height="37" fill="url(#paint0_linear_314_1032)"/>\r
<circle cx="63" cy="41" r="8" fill="white"/>\r
<circle cx="63" cy="41" r="4" fill="#FF0000"/>\r
<defs>\r
<linearGradient id="paint0_linear_314_1032" x1="48" y1="5" x2="44.8665" y2="35.0819" gradientUnits="userSpaceOnUse">\r
<stop stop-color="white"/>\r
<stop offset="1" stop-color="white" stop-opacity="0"/>\r
</linearGradient>\r
</defs>\r
</svg>\r
` }, Symbol.toStringTag, { value: "Module" })), be2 = { class: "w-full h-full bg-[#22222E] text-white dark flex justify-center overflow-hidden pt-10 gap-10" }, Ce2 = { key: 1, class: "w-full h-full z-20 bg-[#22222E] text-white flex flex-col gap-2 items-center justify-center absolute top-0 left-0" }, we2 = { class: "w-20 h-20", "element-loading-background": "rgba(0,0,0,0)" }, ke2 = { class: "flex flex-col w-[420px] gap-4" }, _e = { class: "font-bold flex justify-between" }, xe = { class: "max-h-[40vh]" }, je = { class: "py-2 flex-col flex gap-0.5" }, Ie2 = { class: "flex gap-2 justify-between relative" }, Ve = ["onClick"], He = { key: 0, class: "absolute left-0 right-0 -bottom-8 m-auto w-40 text-center font-bold" }, Me2 = { class: "text-sm el-dark-var mt-4 recording-settings" }, Le = { key: 0, class: "flex items-center" }, ze = { key: 1, class: "flex items-center mt-2" }, Te2 = { key: 2, class: "flex items-center mt-2" }, Oe = { title: "画中画", class: "size-8 rounded-lg justify-center flex items-center", style: { "background-color": "rgba(255, 255, 255, 0.1)" } }, Ue2 = { key: 1, class: "flex relative mt-6" }, Pe3 = { key: 2, class: "w-[260px] h-full overflow-hidden flex flex-col gap-4" }, Se2 = { class: "flex-1 min-h-0 overflow-hidden" }, Ze = ["srcObject"], Re = ["src"], Ge = ["src"], Ee2 = { class: "grid grid-cols-2 overflow-hidden min-w-0 mb-4 gap-2" }, Fe = { key: 2, class: "d-sub" }, Be2 = /* @__PURE__ */ o({ __name: "Content", setup(F2) {
  let B2 = E(Object.assign({ "./assets/camera.svg": fe2, "./assets/camerascreen.svg": ye2, "./assets/logo.svg": io2, "./assets/microphone.svg": he2, "./assets/screen.svg": ge2 }), "assets"), Be22 = Et([{ label: "摄像头", value: "camera", active: !1 }, { label: "摄像头+屏幕", value: "camera,screen", active: !1 }, { label: "仅屏幕", value: "screen", active: !1 }, { label: "仅麦克风", value: "microphone", active: !1 }]), De2 = ne, Ae = $o({ get: () => De2.recordType, set: (e2) => De2.recordType = e2 }), $e = $o(() => {
    let { recordType: e2, enabledTypes: a2 } = De2;
    return e2 ? a2 : {};
  }), qe = $o({ get: () => De2.cameras, set: (e2) => De2.cameras = e2 }), Qe = $o({ get: () => De2.microphones, set: (e2) => De2.microphones = e2 }), We = $o({ get: () => De2.streams, set: (e2) => De2.streams = e2 }), Xe = $o({ get: () => De2.medias, set: (e2) => De2.medias = e2 }), Je = $o({ get: () => De2.files, set: (e2) => De2.files = e2 }), Ke = $o(() => We.value.some((e2) => e2.type !== "microphone")), Ne = $o(() => We.value.some((e2) => e2.type === "merge")), Ye = $o(() => Je.value.some((e2) => e2.type === "merge")), ea = Et({ camera: "视频", screen: "录屏", merge: "画中画" }), aa = Et({ screen: "green-btn" }), la = Et(Date.now()), ta = $o(() => De2.loadStream), sa = Et([{ label: "左上角", value: "lt" }, { label: "左下角", value: "lb" }, { label: "右上角", value: "rt" }, { label: "右下角", value: "rb" }]), ra = Et(MediaRecorder.isTypeSupported("video/webm;codecs=h264")), ia = Et(/^((?!chrome|android).)*safari/i.test(navigator.userAgent)), na = c({ visible: !1, text: "正在加载...", tmpId: null });
  function oa() {
    return Ae.value ? !($e.value.camera && !ee.value.cameraId) && !(!We.value.length || ta.value) : !1;
  }
  function ca() {
    te.value();
  }
  function da() {
    De2.reset(), ne.medias = [], ne.files = [];
  }
  function ua(e2) {
    if (e2.value.includes("camera")) {
      if (ne.device && !ne.device.video) return !1;
      if (ne.device && ne.device.video) return !0;
      if (ne.cameraPermission && !ne.cameras.length) return !1;
    }
    if (e2.value.includes("microphone")) {
      if (ne.device && !ne.device.audio) return !1;
      if (ne.device && ne.device.audio) return !0;
      if (ne.microphonePermission && !ne.microphones.length) return !1;
    }
    return !0;
  }
  function pa() {
    De2.stop();
  }
  async function ma(e2, a2) {
    let l22 = Je.value.find((a3) => a3.type === e2), t2 = Math.random().toString(36).slice(2), s2 = null, r22 = l22.url;
    if (["mp4", "mp3"].includes(a2)) {
      na.value.visible = !0, na.value.text = "正在加载转换文件...", na.value.tmpId = t2;
      try {
        let e3 = !1;
        if (l22.mimeType.includes("video/") && l22.mimeType.includes("h264") && (e3 = !0), s2 = await new yu(l22.blob).convert(a2 === "mp3" ? [] : [...e3 ? ["-c:v", "copy"] : [], "-c:a", "aac"], a2, (e4) => na.value.text = "正在转换，进度 " + e4 + "%").catch((e4) => (na.value.tmpId == t2 && aO.error("格式转换失败"), Promise.reject(e4))), r22 = URL.createObjectURL(s2), na.value.tmpId !== t2) return na.reset();
        na.reset();
      } catch {
        return na.value.tmpId !== t2 ? na.reset() : void na.reset();
      }
    }
    let n2 = document.createElement("a");
    n2.href = r22, n2.download = "NewTab-" + Date.now() + "." + a2, n2.target = "_blank", n2.click(), s2 && setTimeout(() => {
      URL.revokeObjectURL(r22);
    }, 1e3);
  }
  return Ee(() => {
    De2.start && !De2.finished && (la.value = Date.now(), De2.start && la.value - De2.startTimestamp >= 36e5 && pa());
  }, 1e3), (async function() {
    he(), ae.reset(), V("camera") && (qe.value = await _("videoinput")), V("microphone") && (Qe.value = await _("audioinput")), qe.value.some((e2) => e2.deviceId === ee.value.cameraId) || (ee.value.cameraId = ""), Qe.value.some((e2) => e2.deviceId === ee.value.microphoneId) || (ee.value.microphoneId = ""), Ce(), ye();
  })(), hs(() => {
    De2.start && !De2.finished || te.value || (pa(), We.value.forEach((e2) => {
      e2.stream.getTracks().forEach((e3) => {
        e3.stop();
      });
    }), ne.medias = [], ne.files = [], De2.recordType = "", De2.reset(), !ee.value.cameraId && ae.value.cameraId && (ee.value.cameraId = ae.value.cameraId), !ee.value.microphoneId && ae.value.microphoneId && (ee.value.microphoneId = ae.value.microphoneId), te.value = null, Q()), Je.value.forEach((e2) => {
      URL.revokeObjectURL(e2.url);
    }), Je.value = [], bu.terminate();
  }), (i2, d2) => {
    let m2 = uc, h2 = zw, g2 = l, b2 = nd, C2 = VO, w2 = v, R2 = dv, E2 = uv, F3 = PI;
    return Zr(), eo("div", be2, [Lt(te) ? (Zr(), to(we, { key: 0, time: Lt(ee).countdownTime || 3, onEnd: ca }, null, 8, ["time"])) : po("", !0), Lt(na).visible ? (Zr(), eo("div", Ce2, [yn(io("div", we2, null, 512), [[F3, !0]]), io("div", null, Z(Lt(na).text), 1), io("div", null, [lo(m2, { size: "small", underline: "never", onClick: d2[0] || (d2[0] = (e2) => (na.reset(), void bu.terminate())) }, { default: mn(() => d2[15] || (d2[15] = [uo("取消")])), _: 1, __: [15] })])])) : po("", !0), io("div", ke2, [io("div", _e, [d2[19] || (d2[19] = io("div", null, "录制范围", -1)), !Lt(De2).start || Lt(De2).finished ? (Zr(), to(C2, { key: 0, placement: "bottom-end", width: 200, trigger: "click", "popper-style": { padding: 0 } }, { reference: mn(() => [lo(h2, { underline: "never", type: "info" }, { default: mn(() => [d2[16] || (d2[16] = io("span", null, "选项", -1)), lo(Lt(n), { class: "size-4" })]), _: 1, __: [16] })]), default: mn(() => [lo(b2, null, { default: mn(() => [io("div", xe, [io("div", je, [d2[18] || (d2[18] = io("div", { class: "f12 font-bold px-2 pb-2 pt-2" }, "录制倒计时", -1)), lo(g2, { class: "px-2", modelValue: Lt(ee).countdownTime, "onUpdate:modelValue": d2[1] || (d2[1] = (e2) => Lt(ee).countdownTime = e2), modelModifiers: { integer: !0, number: !0 }, min: 0, max: 90 }, { append: mn(() => d2[17] || (d2[17] = [uo("秒")])), _: 1 }, 8, ["modelValue"])])])]), _: 1 })]), _: 1 })) : po("", !0)]), io("div", Ie2, [(Zr(!0), eo(Hr, null, Es(Be22.value, (e2) => (Zr(), eo("div", { key: e2.value, class: W(["flex flex-col gap-4 items-center justify-center rec-type-card", { active: e2.value === Ae.value, "grayscale-100 cursor-not-allowed": !ua(e2), "cursor-pointer": ua(e2) }]), onClick: (a2) => (async function(e3) {
      De2.start && !De2.finished || ua(e3) && (da(), e3.value === Ae.value ? Ae.value = "" : (Ae.value = e3.value, e3.value === "microphone" && ee.value.microphoneId === "none" && (ee.value.microphoneId = "")), ne.enabledTypes.screen && window.chrome && await window.chrome.permissions.request({ permissions: ["desktopCapture"] }), Ae.value === "screen" && Z2(), await fe().catch((e4) => (Ae.value === "screen" && Q(), Promise.reject(e4))), Ae.value === "screen" && ie());
    })(e2) }, [io("div", null, [lo(w2, { raw: Lt(B2)[e2.value.replace(/,/, "")], size: 60 }, null, 8, ["raw"])]), io("div", null, Z(e2.label), 1)], 10, Ve))), 128)), Lt(De2).start || Lt(De2).finished ? (Zr(), eo("div", He, Z(Lt(N)(la.value - Lt(De2).startTimestamp)) + " / 01:00:00 ", 1)) : po("", !0)]), io("ul", Me2, [d2[20] || (d2[20] = io("h2", { class: "mb-2" }, "录制设置", -1)), Lt(De2).enabledTypes.camera ? (Zr(), eo("li", Le, [io("button", { title: "摄像头", class: "size-8 rounded-lg justify-center flex items-center", style: { "background-color": "rgba(255, 255, 255, 0.1)" }, onClick: d2[2] || (d2[2] = (e2) => (async function() {
      await j(!0, !1), ye();
    })()) }, [(Zr(), to(ws(Lt(De2).cameraPermission ? Lt(Mt) : Lt(ve3)), { class: "size-4" }))]), lo(E2, { modelValue: Lt(ee).cameraId, "onUpdate:modelValue": d2[3] || (d2[3] = (e2) => Lt(ee).cameraId = e2), placeholder: "请选择摄像头", style: { "--el-select-width": "220px", "--el-text-color-placeholder": "rgba(255, 255, 255, 0.3)" }, class: "ml-1", disabled: Lt(De2).start && !Lt(De2).finished, onChange: d2[4] || (d2[4] = (e2) => Lt(pe)()) }, { default: mn(() => [(Zr(!0), eo(Hr, null, Es(qe.value, (e2) => (Zr(), to(R2, { key: e2.deviceId, label: e2.label, value: e2.deviceId }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "disabled"])])) : po("", !0), Lt(De2).device && Lt(De2).device.audio ? (Zr(), eo("li", ze, [io("button", { title: "麦克风", class: "size-8 rounded-lg justify-center flex items-center", style: { "background-color": "rgba(255, 255, 255, 0.1)" }, onClick: d2[5] || (d2[5] = (e2) => (async function() {
      await j(!1, !0), ye();
    })()) }, [(Zr(), to(ws(Lt(De2).cameraPermission ? Lt(me3) : Lt(pe2)), { class: "size-4" }))]), lo(E2, { modelValue: Lt(ee).microphoneId, "onUpdate:modelValue": d2[6] || (d2[6] = (e2) => Lt(ee).microphoneId = e2), placeholder: "请选择麦克风", style: { "--el-select-width": "220px" }, class: "ml-1", disabled: Lt(De2).start && !Lt(De2).finished, onChange: d2[7] || (d2[7] = (e2) => Lt(de)()) }, { default: mn(() => [Lt(De2).recordType != "microphone" ? (Zr(), to(R2, { key: 0, label: "禁用", value: "none" })) : po("", !0), (Zr(!0), eo(Hr, null, Es(Qe.value, (e2) => (Zr(), to(R2, { key: e2.deviceId, label: e2.label, value: e2.deviceId }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue", "disabled"])])) : po("", !0), Lt(O)() && $e.value.camera && $e.value.screen ? (Zr(), eo("li", Te2, [io("button", Oe, [lo(Lt(A), { class: "size-4" })]), lo(E2, { modelValue: Lt(ee).cameraMergePosition, "onUpdate:modelValue": d2[8] || (d2[8] = (e2) => Lt(ee).cameraMergePosition = e2), placeholder: "请选择画中画位置", onChange: d2[9] || (d2[9] = (e2) => Lt(me2)()), style: { "--el-select-width": "220px" }, class: "ml-1", disabled: Lt(De2).start && !Lt(De2).finished }, { default: mn(() => [(Zr(!0), eo(Hr, null, Es(sa.value, (e2) => (Zr(), to(R2, { key: e2.value, value: e2.value, label: e2.label }, null, 8, ["value", "label"]))), 128))]), _: 1 }, 8, ["modelValue", "disabled"])])) : po("", !0)]), Xe.value.length ? Lt(De2).finished ? (Zr(), to(m2, { key: 2, type: "primary", size: "large", class: "red-btn mt-6", onClick: d2[14] || (d2[14] = (e2) => (da(), void ie())), disabled: !oa() }, { default: mn(() => [lo(Lt(kt), { stroke: 2, class: "size-4" }), d2[25] || (d2[25] = io("span", { class: "ml-1" }, "重新录制", -1))]), _: 1, __: [25] }, 8, ["disabled"])) : (Zr(), eo("div", Ue2, [Lt(De2).paused ? po("", !0) : (Zr(), to(m2, { key: 0, type: "primary", size: "large", class: "yellow-btn flex-1", onClick: d2[11] || (d2[11] = (e2) => {
      De2.pause();
    }) }, { default: mn(() => [lo(Lt(e), { stroke: 2, class: "size-4" }), d2[22] || (d2[22] = io("span", { class: "ml-1" }, "暂停", -1))]), _: 1, __: [22] })), Lt(De2).paused ? (Zr(), to(m2, { key: 1, type: "primary", size: "large", class: "cyan-btn flex-1", onClick: d2[12] || (d2[12] = (e2) => {
      De2.resume();
    }) }, { default: mn(() => [lo(Lt(l2), { stroke: 2, class: "size-4" }), d2[23] || (d2[23] = io("span", { class: "ml-1" }, "继续", -1))]), _: 1, __: [23] })) : po("", !0), lo(m2, { type: "primary", size: "large", class: "red-btn flex-1", onClick: d2[13] || (d2[13] = (e2) => pa()) }, { default: mn(() => [lo(Lt(R), { stroke: 2, class: "size-4" }), d2[24] || (d2[24] = io("span", { class: "ml-1" }, "停止", -1))]), _: 1, __: [24] })])) : (Zr(), to(m2, { key: 0, type: "primary", size: "large", class: "cyan-btn mt-6", onClick: d2[10] || (d2[10] = (e2) => Lt(ie)()), disabled: !oa() }, { default: mn(() => d2[21] || (d2[21] = [uo(" 开始录制 ")])), _: 1, __: [21] }, 8, ["disabled"]))]), (We.value.filter((e2) => e2.stream).length && Lt(De2).recordType || Je.value.length) && (Ke.value || Lt(De2).finished) ? (Zr(), eo("div", Pe3, [d2[27] || (d2[27] = io("div", { class: "font-bold" }, "录制文件", -1)), io("div", Se2, [lo(b2, null, { default: mn(() => {
      var e2;
      return [Lt(De2).finished ? po("", !0) : (Zr(!0), eo(Hr, { key: 0 }, Es(We.value, (e3) => (Zr(), eo(Hr, { key: e3.id }, [Ne.value && e3.type !== "merge" ? po("", !0) : (Zr(), eo(Hr, { key: 0 }, [e3.type !== "microphone" && e3.stream ? (Zr(), eo("video", { key: 0, muted: "", autoplay: "", srcObject: e3.stream, class: "mb-4 w-full aspect-video object-contain bg-black", controls: "" }, null, 8, Ze)) : po("", !0)], 64))], 64))), 128)), ia.value ? po("", !0) : (Zr(!0), eo(Hr, { key: 1 }, Es(Je.value, (e3) => (Zr(), eo(Hr, { key: e3.type }, [e3.type !== "microphone" ? (Zr(), eo(Hr, { key: 0 }, [!Ne.value && !Ye.value || e3.type === "merge" ? (Zr(), eo("video", { key: 0, src: e3.url, class: "mb-4 w-full aspect-video object-contain", controls: "" }, null, 8, Re)) : po("", !0)], 64)) : po("", !0), e3.type === "microphone" ? (Zr(), eo("audio", { key: 1, src: e3.url, class: "mb-4 w-full", controls: "" }, null, 8, Ge)) : po("", !0)], 64))), 128)), io("div", Ee2, [(Zr(!0), eo(Hr, null, Es(Je.value, (e3) => (Zr(), eo(Hr, { key: e3.type }, [["camera", "screen", "merge"].includes(e3.type) ? (Zr(), eo(Hr, { key: 0 }, [lo(m2, { class: W(["flex-1", [aa.value[e3.type]]]), type: "primary", onClick: (a2) => ma(e3.type, "webm"), style: { "margin-left": "0" } }, { default: mn(() => [uo(" 下载" + Z(ea.value[e3.type]) + "(webm) ", 1)]), _: 2 }, 1032, ["onClick", "class"]), ra.value ? (Zr(), to(m2, { key: 0, class: W(["flex-1", [aa.value[e3.type]]]), type: "primary", onClick: (a2) => ma(e3.type, "mp4"), style: { "margin-left": "0" } }, { default: mn(() => [uo(" 下载" + Z(ea.value[e3.type]) + "(mp4) ", 1)]), _: 2 }, 1032, ["onClick", "class"])) : po("", !0)], 64)) : po("", !0), e3.type === "microphone" ? (Zr(), to(m2, { key: 1, class: "flex-1 red-btn", type: "primary", onClick: (a2) => ma(e3.type, "mp3"), style: { "margin-left": "0" } }, { default: mn(() => d2[26] || (d2[26] = [uo("下载音频(mp3)")])), _: 2, __: [26] }, 1032, ["onClick"])) : po("", !0)], 64))), 128))]), ($e.value.camera || $e.value.screen) && (e2 = Je.value) != null && e2.length ? (Zr(), eo("div", Fe, "⚠️ mp4 转换速度可能较慢，如果无法转换，可优先下载 webm 格式视频")) : po("", !0)];
    }), _: 1 })])])) : po("", !0), Lt(L) ? (Zr(), to(On, { key: 3, to: "body" }, [lo(Pe2)])) : po("", !0)]);
  };
} }, [["__scopeId", "data-v-799b798f"]]);

// output/native-current/index-BFA9sA_u.js
var m = { __name: "index", setup: (m2) => (m3, a) => {
  let j2 = F;
  return Zr(), to(j2, { height: "536px", width: "800px", destroyOnClose: !0, openWindow: !0, closeOnClickModal: !1, closeOnPressEscape: !1, transparent: "" }, { default: mn(() => [lo(Be2, H(co(m3.$attrs)), null, 16)]), _: 1 });
} };
export {
  m as default
};
/**
 * @license @tabler/icons-vue v3.46.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */
