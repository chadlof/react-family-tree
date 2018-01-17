import FamilyMemberPage from '../components/WOStepChild'


const info = {
    marriageDate: '5/30/2002',
    familyMember: {
        name: 'Tammy Marie Lofgren',
        birthDate: 'July 13, 1965'
    },
    spouse: {
        name: 'Christopher Vernon Doege',
        birthDate: 'April 13, 1967'
    },
    children: [
        { name: 'Michel Vernon Doege', href: '/tammy/michel'},
        { name: 'Alexander Robert Doege', href:'/tammy/alex' }
    ],
  
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

