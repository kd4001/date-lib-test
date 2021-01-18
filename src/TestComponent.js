import { Duration, LocalDateTime } from "@js-joda/core";
import { differenceInSeconds, parse } from "date-fns";

import React from "react";
import dayjs from "dayjs";

let dateString1 = "2021-01-18 12:27:24";
let dateString2 = "2021-01-17 12:27:24";

let dateFnsDiff = () => {
  return differenceInSeconds(
    parse(dateString1, "yyyy-MM-dd H:mm:ss", new Date()),
    parse(dateString2, "yyyy-MM-dd H:mm:ss", new Date())
  );
};

let dayJsDiff = () => {
  var x = dayjs("2018-04-04T16:00:00.000Z");
  var y = dayjs();

  return x.diff(y);
};

let jsJodaDiff = () => {
  var dt1 = LocalDateTime.parse("2012-12-24T12:00");

  return Duration.between(dt1, dt1.plusHours(10)).toString();
};

function Test() {
  let dayJsDuration = dayJsDiff();
  let jsJodaDuration = jsJodaDiff();
  let dateFnsDuration = dateFnsDiff();

  return (
    <div>
      <div>day-JS {dayJsDuration}</div>
      <div>Js-Joda {jsJodaDuration}</div>
      <div>Date-fns {dateFnsDuration}</div>
    </div>
  );
}

export default Test;
