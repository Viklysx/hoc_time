import DateTime from './DateTime';

export const DateTimePretty = (Component) => (props) => {
    const hour = 3600 * 1000;
    const minute = 60 * 1000;
    const day = 24*hour;
    const currentTime = new Date().getTime() - new Date(props.date).getTime();
    
    if (currentTime > day) {
        return(<Component {...props} date={`${Math.round(currentTime/day)} дней назад`} />);
    }

    if (currentTime < hour) {
        return(<Component {...props} date={`${Math.round(currentTime/minute)} минут назад`} />);
    } // если прошло меньше часа 

    if (currentTime >= hour) {
        return(<Component {...props} date={`${Math.round(currentTime/hour)} часов назад`} />);
    } // если прошло больше часа
};

export const NewTime = DateTimePretty(DateTime);