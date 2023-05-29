import style from './TrendingTopic.module.scss';

const TrendingTopic = ({ data }) => {
    return(
        <div className={style.wrapper__quote}>
            <blockquote>
                <p>
                    <strong>
                        TRENDING TOPIC:
                    </strong>
                    <a href={data.slug}>
                        {data.title}
                    </a>
                </p>
            </blockquote>
        </div>
    )
}

export { TrendingTopic };