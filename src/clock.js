export function lunarDate(date = new Date()) {
  try {
    return new Intl.DateTimeFormat("zh-CN-u-ca-chinese", {
      month: "long",
      day: "numeric",
    })
      .format(date)
      .replace(/(\d+)日?$/, (_, d) => {
        const n = Number(d);
        const digits = [
          "",
          "一",
          "二",
          "三",
          "四",
          "五",
          "六",
          "七",
          "八",
          "九",
        ];
        return n <= 10
          ? "初" + (n === 10 ? "十" : digits[n])
          : n < 20
            ? "十" + digits[n - 10]
            : n === 20
              ? "二十"
              : n < 30
                ? "廿" + digits[n - 20]
                : "三十";
      });
  } catch {
    return "";
  }
}
export function clockParts(config, date = new Date()) {
  let h = date.getHours();
  const suffix = !config.hour24 ? (h < 12 ? " AM" : " PM") : "";
  h = config.hour24 ? h : h % 12 || 12;
  return {
    time: `${String(h).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}${config.sec ? ":" + String(date.getSeconds()).padStart(2, "0") : ""}${suffix}`,
    date: [
      config.month ? `${date.getMonth() + 1}月${date.getDate()}日` : "",
      config.week
        ? [
            "星期日",
            "星期一",
            "星期二",
            "星期三",
            "星期四",
            "星期五",
            "星期六",
          ][date.getDay()]
        : "",
      config.lunar ? lunarDate(date) : "",
    ]
      .filter(Boolean)
      .join("　"),
  };
}
