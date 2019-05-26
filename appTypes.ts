export interface IMessage {
    accountSid: string
    apiVersion: string
    body: string
    dateCreated: Date
    dateUpdated: Date
    dateSent: null | Date
    direction: string
    errorCode: null | number
    errorMessage: null | string
    from: string
    messagingServiceSid: null | string
    numMedia: string
    numSegments: string
    price: null | number
    priceUnit: string
    sid: string
    status: string
    subresourceUris: string
}
