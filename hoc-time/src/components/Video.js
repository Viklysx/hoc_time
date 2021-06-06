import {NewTime} from './DateTimePretty';

export default function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <NewTime date={props.date} />
        </div>
    )
}