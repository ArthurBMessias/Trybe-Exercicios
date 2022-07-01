

all_students = [
    "Marcos 10\n",
    "Felipe 4\n",
    "José 6\n",
    "Ana 10\n",
    "Maria 9\n",
    "Miguel 5\n",
]

students = open("all_students.txt", mode="w")
students.writelines(all_students)

rep_students = []

with open('all_students') as grades:
    for line in grades:
        grade_student = line
        grade_student = grade_student.spli(' ')
        if int(grade_student[1]) < 6:
            rep_students.append(grade_student[0] + '\n')

with open("repStudents.txt", mode='w') as repStudents:
    print(rep_students)
    repStudents.writelines(rep_students)

students.close()
