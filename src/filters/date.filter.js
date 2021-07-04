export default function dateFilter(value, format = 'date') {
    const options = {
        day:'2-digit',
        month: 'long',
        year: 'numeric'
    }
    return new Intl.DateTimeFormat('ru-Ru', options).format(new Date(value))
}