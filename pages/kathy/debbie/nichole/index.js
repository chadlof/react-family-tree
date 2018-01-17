import FamilyMemberPage from '../../../components/WOMarriageAndStepChild'


const info = {
    marriageDate: null ,
    familyMember: {
        name: 'Nichole Gabriele Calixto   ',
        birthDate: '11/6/1988'
    },
    spouse: {
        name: null
    },
    children: [
        { name: 'Adam Thomas Calixto Gomez    ', href: '/kathy/debbie/nichole/adam'}
    ],
 
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

