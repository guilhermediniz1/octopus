function formatDate(dateString) {
    return dateString.split('-').reverse().join('/')
}

export { formatDate }