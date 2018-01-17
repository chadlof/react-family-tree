import FamilyMemberPage from '../../components/WOMarriageAndStepChild'


const info = {
    marriageDate: null,
    familyMember: {
        name: 'Christopher R Lofgren   ',
        birthDate: '6/14/1982'
    },
 
    children: [
        { name: 'Jaylyn H Lofgren   ', href: '/ken/chris/jaylyn'},
        { name: 'Reed R Lofgren ', href: '/ken/chris/reed'}
    ],
  
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

