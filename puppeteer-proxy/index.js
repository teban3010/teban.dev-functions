const linkPreviewGenerator = require("link-preview-generator");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const url = (req.query.url || (req.body && req.body.url));
    
    const previewData = await linkPreviewGenerator(url);

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: previewData
    };
}