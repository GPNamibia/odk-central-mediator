// upsert record into MYSQL
async function upsertRecordToMysql(model, newItem, submission_uuid) {
    const foundItem = await model.findOne({ where: { submission_uuid: submission_uuid } })
    if (!foundItem) {
        return await model.create(newItem)
            .then((item) => { return { item, created: true } })
    }
    const item = await model.update(newItem, { where: { submission_uuid: submission_uuid } })
    return { item, created: false }
}

// update record review state into MYSQL
async function updateReviewStateToMysql(model, submission_uuid) {
    const foundItem = await model.findOne({ where: { submission_uuid: submission_uuid } })
    if (foundItem) {
        const item = await model.update({ review_state: reviewState }, { where: { submission_uuid: submission_uuid } })
        return { item, created: false }
    }
}

// upsert record into for repeat group based on ptracker_id  MYSQL
async function upsertRepeatGroupRecordToMysql(model, newItem, infant_id) {
    const foundItem = await model.findOne({ where: { infant_id: infant_id } })
    if (!foundItem) {
        return await model.create(newItem)
            .then((item) => { return { item, created: true } })
    }
    const item = await model.update(newItem, { where: { infant_id: infant_id } })
    return { item, created: false }
}

module.exports = {
    upsertRecordToMysql,
    updateReviewStateToMysql,
    upsertRepeatGroupRecordToMysql
}