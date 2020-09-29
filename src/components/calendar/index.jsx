import moment from "moment";
import React from "react";
import { momentLocalizer } from "react-big-calendar";

import useWindowSize from "./use-window-size";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { CalendarWrapper } from "./styled";

const Calendar = () => {
  const size = useWindowSize();

  moment.locale("en-US");
  const localizer = momentLocalizer(moment);

  var myEventsList = [
    {
      title: "Conference",
      start: new Date(2020, 9, 1, 8, 0, 0),
      end: new Date(2020, 9, 1, 9, 0, 0),
      desc: "Big conference for important people",
    },
    {
      title: "Conference2",
      start: new Date(2020, 9, 1, 17, 0, 0),
      end: new Date(2020, 9, 1, 18, 0, 0),
      desc: "Big conference for important people",
    },
    {
      title: "Meeting",
      start: new Date(2020, 8, 28, 10, 30, 0, 0),
      end: new Date(2020, 8, 28, 12, 30, 0, 0),
      desc: "Pre-meeting meeting, to prepare for the meeting",
    },
    {
      title: "Lunch",
      start: new Date(2020, 9, 1, 6, 0, 0, 0),
      end: new Date(2020, 9, 1, 7, 0, 0, 0),
      desc: "Power lunch",
    },
    {
      title: "Doctor",
      start: new Date(2020, 9, 2, 9, 0, 0, 0),
      end: new Date(2020, 9, 2, 10, 0, 0, 0),
      desc: "Surgery",
    },
    {
      title: "Doctor",
      start: new Date(2020, 9, 2, 15, 0, 0, 0),
      end: new Date(2020, 9, 2, 16, 0, 0, 0),
      desc: "Surgery",
    },
  ];

  const workDays = {
    1: [7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19],
    2: [8, 9, 10],
  };

  function onSlotChange(slotInfo) {
    var startDate = moment(slotInfo.start.toLocaleString()).format("YYYY-MM-DD HH:mm:ss");
    var endDate = moment(slotInfo.end.toLocaleString()).format("YYYY-MM-DD HH:mm:ss");
    console.log("startTime", startDate); //shows the start time chosen
    console.log("endTime", endDate); //shows the end time chosen
    // console.log("startcarol", moment(slotInfo.start.toLocaleString())._d); //pegar sat ou sun por aqui
  }

  function onEventClick(event) {
    console.log("onEventClick", event); //Shows the event details provided while booking
  }

  function eventStyleGetter(event, start, end, isSelected) {
    // console.log("eventStyleGetter", event);

    if (event.title.includes("Conference")) {
      var backgroundColor = "#ba274a";
    }
    var style = {
      backgroundColor,
      // borderRadius: '0px',
      // opacity: 0.8,
      // color: 'black',
      // border: '0px',
      // display: 'block',
    };
    return {
      style,
    };
  }

  const ColoredDateCellWrapper = ({ children }) =>
    React.cloneElement(React.Children.only(children), {
      style: {
        backgroundColor: "lightblue",
      },
    });

  const customSlotPropGetter = (date) => {
    const keys = Object.keys(workDays);
    for (let i = 0; i <= keys.length; i++) {
      if (date.getDay().toString() === keys[i]) {
        console.log(keys);
        const hours = Object.values(workDays[keys[i]]);
        for (let j = 0; j < hours.length; j++) {
          if (date.getHours() === hours[j]) {
            return {
              className: "work-day",
            };
          }
        }
      }
    }
  };

  return (
    <>
      {size.width >= 430 && (
        <CalendarWrapper
          views={["work_week", "day", "agenda"]}
          defaultView="work_week"
          selectable
          onSelectEvent={(event) => onEventClick(event)}
          onSelectSlot={(slotInfo) => onSlotChange(slotInfo)}
          eventPropGetter={eventStyleGetter}
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "auto", maxWidth: 900 }}
          formats={{
            timeGutterFormat: (date, culture, localizer) => localizer.format(date, "H:mm", culture),
          }} // formato 24h
          min={moment().minute(0).hour(7).toDate()}
          max={moment().minute(0).hour(20).toDate()}
          // timeslots={2}
          // components={{
          //   timeSlotWrapper: ColoredDateCellWrapper,
          // }}
          slotPropGetter={customSlotPropGetter}
        />
      )}

      {size.width < 430 && (
        <CalendarWrapper
          views={["day", "agenda"]}
          defaultView="day"
          selectable
          onSelectEvent={(event) => onEventClick(event)}
          onSelectSlot={(slotInfo) => onSlotChange(slotInfo)}
          eventPropGetter={eventStyleGetter}
          localizer={localizer}
          events={myEventsList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "auto", maxWidth: 900 }}
          formats={{
            timeGutterFormat: (date, culture, localizer) => localizer.format(date, "H:mm", culture),
          }} // formato 24h
          min={moment().minute(0).hour(7).toDate()}
          max={moment().minute(0).hour(20).toDate()}
          // timeslots={2}
        />
      )}
    </>
  );
};

export default Calendar;
