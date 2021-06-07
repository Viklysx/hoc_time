import DateTime from './DateTime';

export const DateTimePretty = (Component) => (props) => {
    const hour = 3600 * 1000;
    const minute = 60 * 1000;
    const day = 24*hour;
    const currentTime = new Date().getTime() - new Date(props.date).getTime();
    let date;
    
    if (currentTime > day) {
        date=`${Math.round(currentTime/day)} дней назад`;
    } else if (currentTime < hour) {
        date=`${Math.round(currentTime/minute)} минут назад`;
    } else if (currentTime >= hour) {
        date=`${Math.round(currentTime/hour)} часов назад`;
    }

    return(<Component {...props} date={date} />);
};

export const NewTime = DateTimePretty(DateTime);