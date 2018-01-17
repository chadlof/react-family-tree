import FamilyMemberPage from '../../../components/WOMarriageAndChild'


const info = {
  
    familyMember: {
        name: 'Kayla Rekdahl  ',
        birthDate: '12/30/2002 '
    }
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

