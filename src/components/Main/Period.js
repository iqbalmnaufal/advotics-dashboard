import { useState, useEffect } from "react";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";

import Calender from "../../assets/calendar.png";

import Modal from "./Modal";

import classes from "./Period.module.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const Period = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let getDate = new Date();
  let today = getDate.getDate() + " " + months[getDate.getMonth()] + " " + getDate.getFullYear();
  const [firstDate, setFirstDate] = useState(today);
  const [secondDate, setSecondDate] = useState(today);

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  useEffect(() => {
    setFirstDate(
      state[0].startDate.getDate() +
        " " +
        months[state[0].startDate.getMonth()] +
        " " +
        state[0].startDate.getFullYear()
    );
    setSecondDate(
      state[0].endDate.getDate() +
        " " +
        months[state[0].endDate.getMonth()] +
        " " +
        state[0].endDate.getFullYear()
    );
  }, [state, firstDate, secondDate]);

  const [isShow, setIsShow] = useState(false);

  const chooseDate = () => {
    setIsShow(true);
  };

  const closeDate = () => {
    console.log("TES");
    setIsShow(false);
  };

  return (
    <div className={classes.container} onClick={chooseDate}>
      <div className={classes.title}>
        <img src={Calender} alt="calender" />
        <h2>Period</h2>
      </div>
      <p className={classes.dateDetail}>
        {firstDate} - {secondDate}
      </p>

      {isShow && (
        <Modal onClose={closeDate}>
          <DateRangePicker
            onChange={(item) => setState([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={state}
            direction="horizontal"
            className={classes.datePicker}
          />
          ;
        </Modal>
      )}
    </div>
  );
};

export default Period;
