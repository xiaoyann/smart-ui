const codeRe = /\`([^\`]+)\`/g
const smartCodeRe = /(<smart-code[^<>]*?>)([\s\S]+)(<\/smart-code>)/g

function htmlEncode(html) {
  html =
    html.replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\s/g, '&nbsp;')
  return html
}

module.exports = function(content) {
  return content.replace(codeRe, function(m, sub) {
    return '<code>'+ htmlEncode(sub) +'</code>'
  })
  .replace(smartCodeRe, function(m, start, code, end) {
    return start + htmlEncode(code) + end
  })
}
