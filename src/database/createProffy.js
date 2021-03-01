// the whole logic of insert data on database will be made here
module.exports = async function(db, { proffyValue, classValue, classScheduleValues }) {// export function
    // insert data in proffys table
    // await is substitute of then (await: just go to the next line of code when finish the current one)
    // to use await you need to use async before the function that contains the call

    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `) // we need proffy id

    const proffy_id = insertedProffy.lastID // last id e um atributo do objeto insertedProffy

    // insert data in 'classes' table
    
    const insertedClass = await db.run(`
        INSERT INTO classes (
            subject,
            cost,
            proffy_id
        ) VALUES (
            "${classValue.subject}",
            "${classValue.cost}",
            "${proffy_id}"
        );
    `)

    const class_id = insertedClass.lastID

    // insert data in table 'class_schedule'

    const insertedAllClassScheduleValues = classScheduleValues.map( (classScheduleValue) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"

            );
        `)
    })

    // here I will execute all db.runs() of class_schedules

    await Promise.all(insertedAllClassScheduleValues)
}
