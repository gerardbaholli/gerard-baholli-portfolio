import PropTypes from 'prop-types';

function Keyword({ keyword, highlightMatch }) {
    return (
        <div className="keyword-card">
            <h3>
                {highlightMatch(keyword['it-word'])} - {highlightMatch(keyword['en-word'])}
            </h3>
            <p>{keyword['it-description']}</p>
        </div>
    );
}

// Aggiungi la validazione delle props con PropTypes
Keyword.propTypes = {
    keyword: PropTypes.shape({
        'it-word': PropTypes.string.isRequired,
        'en-word': PropTypes.string.isRequired,
        'it-description': PropTypes.string.isRequired
    }).isRequired,
    highlightMatch: PropTypes.func.isRequired
};

export default Keyword;
