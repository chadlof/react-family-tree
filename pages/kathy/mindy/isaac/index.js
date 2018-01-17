import FamilyMemberPage from '../../../components/WOMarriageAndChild'


const info = {
  
    familyMember: {
        name: 'Isaac Gregory DuFault      ',
        birthDate: '6/17/2013  '
    }
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

