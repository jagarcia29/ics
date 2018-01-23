export default function setContact({ name, email, rsvp, partStat }) {
    let formattedAttendee = 'CN='
    formattedAttendee += name || 'Unnamed attendee'
    formattedAttendee += '";';
    formattedAttendee += rsvp ? 'RSVP=TRUE:' : '';
    formattedAttendee += partStat ? ':PARSTSTAT='+partStat : '';
    formattedAttendee += email ? `:mailto:${email}` : ''

  return formattedAttendee
}