class DocumentNotFoundError extends Error {
    constructor() {
        super()
        this.name = "DocumentNotFoundError"
        this.message = "The provided ID does not match any documents"
    }
}
    //checks to see if Doc ID exist
        //NO Doc ID throw error
        //else return the valid Doc
const handle404 = (document) => {
    if(!document){
        throw new DocumentNotFoundError()
    } else {
        return document
    }
}

module.exports = {
    handle404
}