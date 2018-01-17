import FamilyMemberPage from '../../../components/WOMarriageAndChild'


const info = {
  
    familyMember: {
        name: 'Maci Lynn  Lofgren',
        birthDate: '6/21/2010 '
    }
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

