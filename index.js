(function () {
    // get data from Dom
    let rows = Array.from(document.querySelectorAll('tr')).slice(1).map(row => ({
        name: row.querySelector('[automation-id="as-table-cell-action|positionId"]').innerText.replace('Buy ', ''),
        money:  Number(row.querySelector('[automation-id="as-table-cell-profit"]').innerText.replace('(','-').replace(')', '')),
        type: row.querySelector('[automation-id="as-table-cell-instrumentType|isinCode"]').innerText,
    }));
    // get all types
    let summary = [...new Set(rows.map(r => r.type))].reduce((a, r) => ({ ...a, [r + '+']: 0, [r + '-']: 0 }), {})
    // calculate plus and minus for each type
    rows.forEach(v => {v.money >= 0 ? summary[v.type + '+'] += v.money : summary[v.type + '-'] += v.money})
    return summary
})()
