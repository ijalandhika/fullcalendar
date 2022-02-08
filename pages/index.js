import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from '@fullcalendar/daygrid';
import { useRef } from "react";
import tippy from 'tippy.js';

const Calendar = () => {
  const calendarRef = useRef(null);
  return (
    <div>
      <div id="template" style={{ display: 'none'}}>
        <div style={{ backgroundColor: '#CCE4F5'}}>
          <h3>Information</h3>
          <hr />
          <p>You have appointments between 11am-2pm in another facility</p>
        </div>
      </div>
      <FullCalendar
        innerRef={calendarRef}
        plugins={[timeGridPlugin, interactionPlugin, dayGridPlugin]}
        editable
        selectable
        dayMaxEvents={true}
        initialDate='2021-11-12' 
        initialView='dayGridMonth'
        eventDidMount={(info) => {
          console.log(info);
          tippy(info.el, {
            content: template.innerHTML,
            allowHTML: true,
            trigger: "click",
            theme: "light"
          });
        }}
        events={[
          {
            title: 'Busy Event',
            description: 'description for Busy Event',
            start: '2021-11-01',
            backgroundColor:'gray'
          },
          {
            title: 'Long Event',
            description: 'description for Long Event',
            start: '2021-11-07',
            end: '2021-11-10'
          },
          {
            groupId: '999',
            title: 'Repeating Event',
            description: 'description for Repeating Event',
            start: '2021-11-09T16:00:00'
          },
          {
            groupId: '999',
            title: 'Repeating Event',
            description: 'description for Repeating Event',
            start: '2021-11-16T16:00:00'
          },
          {
            title: 'Conference',
            description: 'description for Conference',
            start: '2021-11-11',
            end: '2021-11-13'
          },
          {
            title: 'Meeting',
            description: 'description for Meeting',
            start: '2021-11-12T10:30:00',
            end: '2021-11-12T12:30:00'
          },
          {
            title: 'Lunch',
            description: 'description for Lunch',
            start: '2021-11-12T12:00:00'
          },
          {
            title: 'Meeting',
            description: 'description for Meeting',
            start: '2021-11-12T14:30:00'
          },
          {
            title: 'Meeting',
            description: 'description for Meeting',
            start: '2021-11-12T14:30:00'
          },
          {
            title: 'Meeting',
            description: 'description for Meeting',
            start: '2021-11-12T14:30:00'
          },
          {
            title: 'Meeting',
            description: 'description for Meeting',
            start: '2021-11-12T14:30:00'
          },
          {
            title: 'Meeting',
            description: 'description for Meeting',
            start: '2021-11-12T14:30:00'
          },
          {
            title: 'Meeting',
            description: 'description for Meeting',
            start: '2021-11-12T14:30:00'
          },
          {
            title: 'Birthday Party',
            description: 'description for Birthday Party',
            start: '2021-11-13T07:00:00'
          },
          {
            title: 'Click for Google',
            description: 'description for Click for Google',
            url: 'http://google.com/',
            start: '2021-11-28'
          }
        ]} 

      />
    </div>
  );
};

export default Calendar;
