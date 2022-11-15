import React from 'react'
import ContentLoader from 'react-content-loader'

const DoorDashFavorite = () => (
    <ContentLoader
        width={'100%'}
        height={400}
        viewBox="100%"
        backgroundColor="#f0f0f0"
        foregroundColor="#dedede"
    >
        <rect x="0" y="10" rx="0" ry="0" width="1100" height="500" />
    </ContentLoader>
)

DoorDashFavorite.metadata = {
    name: 'Nic Bovee', // My name
    github: 'ghettifish', // Github username
    description: 'A simple favorite from the DoorDash local favorites.', // Little tagline
    filename: 'DoorDashFavorite', // filename of your loader
}

export default DoorDashFavorite