//utils.js
async function getLabelIds(labels, pool) {
    const labelIds = [];
  
    for (const label of labels) {
      // 查詢 label 是否存在
      const result = await pool.query(
        'SELECT lid FROM label WHERE labelname = $1',
        [label]
      );
  
      if (result.rowCount > 0) {
        // 如果存在，獲取 lid
        labelIds.push(result.rows[0].lid);
      } else {
        throw new Error(`Label "${label}" does not exist in the label table.`);
      }
    }
  
    return labelIds;
  }
  
  module.exports = { getLabelIds };