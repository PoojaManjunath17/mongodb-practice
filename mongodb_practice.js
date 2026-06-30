use supermarket

db.createCollection("employees")
db.createCollection("inventory")
db.createCollection("payments")
db.createCollection("promo")

// Insert data
db.employees.insertMany(data1)
db.inventory.insertMany(data2)
db.payments.insertMany(data3)
db.promo.insertMany(data4)

// Queries
db.employees.find().pretty()
db.inventory.find().pretty()
db.payments.find().pretty()
db.promo.find().pretty()

db.promo.find({period: {$gt: 3}}).pretty()

db.promo.find({name: "sales promo"}).pretty()

db.promo.find({
    daily_sales: {$elemMatch: {$gt: 200}}
}).pretty()

db.promo.aggregate([
    {
        $project: {
            name: 1,
            period: 1,
            average_sales: {$avg: "$daily_sales"}
        }
    }
]).pretty()