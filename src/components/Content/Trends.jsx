import React from 'react';

const trends = [
    {
        trendId: 1,
        hashtag: '#RubberBabyBuggy',
        likes: 13.9
    },
    {
        trendId: 2,
        hashtag: '#WubbaLubaDub',
        likes: 10.2
    },
    {
        trendId: 3,
        hashtag: '#NoobNoob',
        likes: 7852
    },
    {
        trendId: 4,
        hashtag: '#MortyForever',
        likes: 5126
    },
    {
        trendId: 5,
        hashtag: '#Rikitikitavi',
        likes: 2458
    }
];

const Trends = () =>
    <div className="block trends-widget">
        <h5 className="mb-4">Tendencias para ti</h5>
        { trends.map( trend =>
            <div className="trends-widget__item" key={ trend.trendId }>
                <button>{ trend.hashtag }</button>
                <span>{ trend.likes } likes</span>
            </div>
        )}
    </div>

export default Trends;