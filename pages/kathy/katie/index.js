import FamilyMemberPage from '../../components/WOStepChild'


const info = {
    marriageDate: 'July 25, 2009 ',
    familyMember: {
        name: 'Katie Ann Chock (Gruber)        ',
        birthDate: '5/8/1983'
    },
    spouse: {
        name: 'Daniel Joseph Meis Chock     ',
        birthDate: '3/26/1983 '
    },
    children: [
        { name: 'Aria Kathryn Chock      ', href: '/kathy/katie/aria'}
    ],
 
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

