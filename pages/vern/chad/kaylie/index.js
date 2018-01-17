import FamilyMemberPage from '../../../components/WOMarriageAndChild'


const info = {
  
    familyMember: {
        name: 'Kaylie Marie Lofgren',
        birthDate: 'December 4, 2005'
    }
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}