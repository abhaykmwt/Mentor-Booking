import { useState } from "react";
import "./Booking.css";
import { Field } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import emailjs from "@emailjs/browser";
import DatePicker from "react-datepicker";
const Booking = () => {
  const [date, setdate] = useState(new Date());
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [email, setemail] = useState(null);
  const [username, sethandlusername] = useState(null);
  const [number, setnumber] = useState(null);

  const handleTeacherChange = (e) => {
    setSelectedTeacher(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date.target.value);
  };
  const handlenumber = (e) => {
    setnumber(e.target.value);
  };
  const handlusername = (e) => {
    sethandlusername(e.target.value);
  };
  const handleEmailChange = (e) => {
    setemail(e.target.value);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x1w7wcw",
        "template_9btv8hd",
        e.target,
        "BBbui099samAzY4C6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    const res = await fetch(
      "https://mentor-booking-1a5fd-default-rtdb.firebaseio.com/Mentor-Booking.json",
      {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          selectedTeacher,
          selectedDate,
          email,
          username,
          number,
        }),
      }
    );

    alert("Your Booking is SUbmited Successfully");
    // TODO: Handle booking submission here
  };

  return (
    <>
      <div className="container">
        <h1 style={{ fontSize: "40px",marginTop:"5vit%"}}>
          Book a Teacher/
          <span
            style={{
              color: "aquamarine",
            }}
          >
            Mentor
          </span>
        </h1>
        <br></br>
        <br></br>
        <form onSubmit={handlesubmit}>
          <label>Name: </label>
          <input name="username" type="text" onChange={handlusername} />
          <br /> <br />
          <label>Email : </label>
          <input name="email" type="email" onChange={handleEmailChange} />
          <br /> <br />
          <label>Phone : </label>
          <input name="Phone" type="number" onChange={handlenumber} />
          <br /> <br />
          <label htmlFor="teacher">Select a teacher : </label>
          <select name="teacher" onChange={handleTeacherChange}>
            <option value={"Rupali EX Amazon< "}>Rupali EX Amazon</option>
            <option value={"Tanay Ex Microsoft "}>Tanay Ex Microsoft</option>
            <option value={" shardha Ex|| NEtflix"}>
              shardha Ex|| NEtflix
            </option>
            <option value={" Harry EX Aapple"}>Harry EX Aapple"</option>
          </select>
          <br />
          <br />
          <label htmlFor="date">Select date :</label>
          <br />
          <br />
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            name="dateTime"
                      showIcon
                      placeholderText="Select date"
            showTimeSelect
            dateFormat="Pp"
            minDate={new Date()}
          />
          <br /> <br />
          <input name="time" type="time" />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Booking;
