class User {
          constructor(firstName, lastName, age) {
              this.firstName = firstName
              this.lastName = lastName
              this.age = age
          }
          getFullName() {
              return `${this.firstName} ${this.lastName}`
          }
          getInitials() {
              return `${this.firstName[0]}${this.lastName[0]}`
          }
          canVote() {
              if (this.age >= 18) {
                  return true
              }
              return false
          }
          }
          let sam = new User("Sam", "Blue", 49);