
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';



const  ValuePiece = Date | null;

const  Value = ValuePiece | [ValuePiece, ValuePiece];


// TEMPARARY DATA
const events = [
    {
        id: 1,
        title: "Lorem ipsum dolor",
        time: "12:00 PM -2:00 M",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        id: 2,
        title: "Lorem ipsum dolor",
        time: "12:00 PM -2:00 M",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor",
        time: "12:00 PM -2:00 M",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
];

const EventCalendar = () => {
    const [value, onChange] = useState(new Date());
  return (
      <div className="bg-white p-4 rounded-md">
          <Calendar onChange={onChange} value={value} />
          
    </div>
  )
}

export default EventCalendar