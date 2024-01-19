import { connect } from '../../data/common'

const getPlatformConnectLink = (platform) => {
    const platformObj = connect.find(platformObj => platformObj.platform === platform);
    return platformObj.link
}

export default getPlatformConnectLink