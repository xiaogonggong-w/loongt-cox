

import logo from '@/assets/svg/LoongCoX.svg'

import MenuList from './Menu'

export default function Header() {
   

    return <div style={{
        display: 'flex',
        alignItems: 'center',
        background: '#fff',
        padding: '0 16px',
        boxShadow: '0 1px 4px rgba(0,21,41,.08)',
        height: '64px',
        justifyContent: 'space-between',
    }}>
        <div className='logo' style={{
            width: '200px',
            height: '48px',
            display: 'flex',
            alignItems: 'center',
        }}>
            <img src={logo} alt="logo" style={{ height: '32px', width: 'auto' }} />
        </div>
        <MenuList />
        <div></div>
    </div>
}
