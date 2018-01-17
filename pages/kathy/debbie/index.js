import FamilyMemberPage from '../../components/FamilyMemberPage'


const info = {
    marriageDate: 'August 5, 1980 ',
    familyMember: {
        name: 'Debbie Renee Calixto (Gruber)',
        birthDate: 'July 27, 2005'
    },
    spouse: {
        name: null
    },
    children: [
        { name: 'Caleb Austin Calixto', href: '/kathy/debbie/caleb'},
        { name: 'Derek Michael Calixto', href: '/kathy/debbie/derek'},
    ],
    stepChildren: [
        { name: 'Carlos Alberto Calixto    ', href: '/kathy/debbie/carlos'},
        { name: 'Nichole Gabriele Calixto   ', href: '/kathy/debbie/nichole'}
    ]
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

