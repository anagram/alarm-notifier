/**
 * Created by exile on 11/01/14.
 */
const WAIT_ON = "/usr/local/bin/wait_on";
const TARGET_DIR = "/var/spool/jaga-cored";
const LOGFILE = "/var/log/jablotron.log";
const ALARM_NAME = "Alarm";

const DELETE_ENABLED = true;

/* Integration Settings */
const PROWL_ENABLED = false;
const PROWL_API_KEY = "";

const TWILIO_ENABLED = false;
const TWILIO_ACCOUNT_SID = "";
const TWILIO_AUTH_TOKEN = "";
const TWILIO_FROM = "+1x";
const TWILIO_TO = "+372x";

const PUSHOVER_ENABLED = false;
const PUSHOVER_API_KEY = "";
const PUSHOVER_TO = "";

module.exports = {
    WAIT_ON: WAIT_ON,
    TARGET_DIR: TARGET_DIR,
    LOGFILE: LOGFILE,
    ALARM_NAME: ALARM_NAME,
    DELETE_ENABLED: DELETE_ENABLED,
    PROWL_API_KEY: PROWL_API_KEY,
    PROWL_ENABLED: PROWL_ENABLED,
    TWILIO_ENABLED: TWILIO_ENABLED,
    TWILIO_ACCOUNT_SID: TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN: TWILIO_AUTH_TOKEN,
    TWILIO_FROM: TWILIO_FROM,
    TWILIO_TO: TWILIO_TO,
    PUSHOVER_ENABLED: PUSHOVER_ENABLED,
    PUSHOVER_API_KEY: PUSHOVER_API_KEY,
    PUSHOVER_TO: PUSHOVER_TO
};
