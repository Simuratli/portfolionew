import React, { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/router';
import { Avatar } from '../../components';
import { More } from '../../containers';
import { routes } from '../../utils/routes-dashboard.util';
import ProjectsImage from '../../public/assets/avatar/projects.png';
function Dashboard() {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) router.push('/login');
  }, [router, user]);

  return (
    <div>
      {user && user.email === 'simuratli@gmail.com' && (
        <div>
          <Avatar image={ProjectsImage} />
          <More
            headerTitle='Dashboard'
            subHeaderTitle='Edit what you want to see in portfolio'
            data={routes}
          />
        </div>
      )}
    </div>
  );
}

export default Dashboard;
