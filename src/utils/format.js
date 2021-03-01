const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
]

function convertHoursToMinutes(time)
{
    // const hour = time.split(':')[0]
    // const minutes = time.split(':')[1]
    const [hour, minutes] = time.split(':')
    // ensure that will return in number format
    return Number((hour * 60) + minutes)
}

function getSubject(subjectNumber)
{
    const position = +subjectNumber - 1
    return subjects[position]
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}