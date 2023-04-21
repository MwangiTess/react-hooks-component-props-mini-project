const Article = ({title, date, preview, minutes}) => {
    return (
        <article>
            <h3>{title}</h3>
            <p>
            <small><time>{date ? date : 'January 1, 1970'}</time>.   {minutes} min read </small>
            </p>
            <p>{preview}</p>
           

        </article>
    );
}
 
export default Article;