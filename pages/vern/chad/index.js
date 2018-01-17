import FamilyMemberPage from '../../components/WOStepChild'


const info = {
    marriageDate: 'June 22, 2009',
    familyMember: {
        name: 'Chad Alan Lofgren',
        birthDate: 'July 22, 1986'
    },
    spouse: {
        name: 'Kathrarn Lynn "Londo" Lofgren',
        birthDate: 'June 22, 1981'
    },
    children: [
        { name: 'Kaylie Marie Lofgren', href: '/vern/chad/kaylie'},
        { name: 'Kennadee Elain Lofgren', href:'/vern/chad/kenna' },
        { name: 'Calan Joseph Lofgren Lofgren', href:'/vern/chad/calan' }
    ],
    stepChildren: [
        { name: null}
    ]
}

export default function() {
    return (
        <FamilyMemberPage mydata={info} />
    )
}

