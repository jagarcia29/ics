'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = setContact;
function setContact(_ref) {
    var name = _ref.name,
        email = _ref.email,
        rsvp = _ref.rsvp,
        partStat = _ref.partStat;

    var formattedAttendee = 'CN=';
    formattedAttendee += name || 'Unnamed attendee';
    formattedAttendee += rsvp ? ';RSVP=TRUE' : '';
    formattedAttendee += partStat ? ';PARSTSTAT=' + partStat : '';
    formattedAttendee += email ? ':mailto:' + email : '';

    return formattedAttendee;
}