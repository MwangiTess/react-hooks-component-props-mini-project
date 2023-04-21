const Article = ({title, date, preview, minutes}) => {
    return (
        <article>
            <h3>{title}</h3>
            <p>
            <small><time>{date ? date : 'January 1, 1970'}</time> - {preview} - {minutes} minutes to read </small>
            </p>
           

        </article>
    );
}
 
export default Article;