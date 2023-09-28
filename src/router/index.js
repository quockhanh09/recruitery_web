import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegistrationView from '../views/RegistrationView.vue'
import RegistrationHomeView from '../views/RegistrationFolder/RegistrationHomeView.vue'
import CompanyView from '../views/RegistrationFolder/CompanyView.vue'
import HeadhuntView from '../views/RegistrationFolder/HeadhuntView.vue'
import LoginView from '../views/LoginFolder/LoginView.vue'
import LoginHomeView from '../views/LoginFolder/LoginHomeView.vue'
import ResetPassword from '../views/ResetPassword.vue'
import BlogView from '../views/BlogView.vue'
import HomePageView from '../views/HomePageView.vue'
import BlogNewView from '../views/BlogNewView.vue'
import BlogHomeView from '../views/BlogHomeView.vue'
import BlogRecruitmentView from '../views/BlogRecruitmentView.vue'
import BlogSearchHandbook from '../views/BlogSearchHandbook.vue'
import EmployeeView from '../views/Employee/EmployeeView.vue'
import EmployeeRecruting from '../views/Employee/EmployeeRecruting.vue'
import AboutUsView from '../views/AboutUsView.vue'
import RecruiterView from '../views/RecruiterView.vue'
import AgencyView from '../views/AgencyView.vue'
import User1 from '../views/User1View.vue'
import RecruiterHomeView from '../views/RecruiterHomeView.vue'
import CompanyHomeView from '../views/CompanyHomeView.vue'
import PayrollView  from '../views/PayrollView.vue'
import AdminView from '../views/AdminFolder/AdminView.vue'
import AdminHomeView from '../views/AdminFolder/AdminHomeView.vue'
import TalentPoolView from '../views/AdminFolder/TalentPool/TalentPoolView.vue'
import TalentPoolHome from '../views/AdminFolder/TalentPool/TalentPoolHome.vue'
import JobView from '../views/JobView.vue'
import HireView from '../views/HireView.vue'
import LayoffPoolView from '../views/AdminFolder/TalentPool/LayoffPoolView.vue'
import CandidatesView from '../views/AdminFolder/TalentPool/CandidatesView.vue'
import MyListingView from '../views/AdminFolder/TalentPool/MyListingView.vue'
import SavedView from '../views/AdminFolder/TalentPool/SavedView.vue'
import HistoriesView from '../views/AdminFolder/TalentPool/HistoriesView.vue'
import NotificationsView from '../views/AdminFolder/Notifications/NotificationsView.vue'
import NotificationsHome from '../views/AdminFolder/Notifications/NotificationsHome.vue'
import CandidatesNotificationView from '../views/AdminFolder/Notifications/CandidatesView.vue'
import CommentsView from '../views/AdminFolder/Notifications/CommentsView.vue'
import JobsView from '../views/AdminFolder/Notifications/JobsView.vue'
import PackageView from '../views/AdminFolder/PackageView.vue'
import ReferralsView from '../views/AdminFolder/ReferralsView.vue'
import ChatView from '../views/AdminFolder/ChatView.vue'
import SettingsHome from '../views/AdminFolder/SettingsBrand/SettingsHome.vue'
import SettingsView from '../views/AdminFolder/SettingsBrand/SettingsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      layout: 'default'
    },
    component: HomePageView,
    children: [
      {
        path: '',
        name: 'home-view',
        component: HomeView
      },
      {
        path: 'about-us',
        name: 'about-us',
        component: AboutUsView
      },
      {
        path: 'company',
        name: 'company',
        component: CompanyHomeView
      },
      {
        path: 'hire',
        name: 'hire',
        component: HireView
      },
      {
        path: 'payroll',
        name: 'payroll',
        component: PayrollView
      },
      {
        path: 'job-home',
        name: 'job-home',
        component: JobView
      },
      {
        path: 'recruiter',
        name: 'recruiter',
        component: RecruiterView,
        children: [
          {
            path: '',
            name: 'recruiter-home',
            component: RecruiterHomeView
          },
          {
            path: 'user1',
            name: 'user1',
            component: User1
          }
        ]
      },
      {
        path: 'agency',
        name: 'agency',
        component: AgencyView
      },
      {
        path: 'employee',
        name: 'employee-view',
        component: EmployeeView,
        children: [
          {
            path: '',
            name: 'employee-recruting',
            component: EmployeeRecruting

          }
        ]
      },
      {
        path: 'blog',
        name: 'blog',
        component: BlogView,
        children: [
          {
            path: '',
            name: 'blog-view',
            component: BlogHomeView
          },
          {
            path: 'category',
            name: 'blog-new',
            component: BlogNewView
          },
          {
            path: 'recruitment',
            name: 'blog-recruitment',
            component: BlogRecruitmentView
          },
          {
            path: 'search-handbook',
            name: 'blog-search-handbook',
            component: BlogSearchHandbook
          }
        ]
      }
    ]
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    meta: {
      layout: 'resetPassword'
    },
    component: ResetPassword
  },
  {
    path: '/registration',
    name: 'registration',
    meta: {
      layout: 'registration'
    },
    component: RegistrationView,
    children: [
      {
        path: '',
        name: 'registration_view',
        component: RegistrationHomeView
      },
      {
        path: 'headhunt',
        name: 'headhunt',
        component: HeadhuntView
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      layout: 'login'
    },
    component: LoginView,
    children: [
      {
        path: '',
        name: 'login_view',
        component: LoginHomeView
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin',
    meta: {
      layout: 'admin'
    },
    component: AdminView,
    children: [
      {
        path: '',
        name: 'admin-home',
        component: AdminHomeView,
      },
      {
        path: 'package',
        name: 'package',
        component: PackageView,
      },
      {
        path: 'referrals',
        name: 'referrals',
        component: ReferralsView,
      },
      {
        path: 'chat',
        name: 'chat',
        component: ChatView,
      },
      {
        path: '',
        name: 'marketplace',
        component: TalentPoolView,
        children: [
          {
            path: 'marketplace',
            name: 'marketplace-home',
            component: TalentPoolHome
          },
          {
            path: 'layoff-pool',
            name: 'layoff-pool',
            component: LayoffPoolView
          },
          {
            path: 'candidates',
            name: 'candidates',
            component: CandidatesView
          },
          {
            path: 'my-listing',
            name: 'my-listing',
            component: MyListingView
          },
          {
            path: 'saved',
            name: 'saved',
            component: SavedView
          },
          {
            path: 'histories',
            name: 'histories',
            component: HistoriesView
          },
        ]
      },
      {
        path: '',
        name: 'notifications',
        component: NotificationsView,
        children: [
          {
              path: 'notifications',
              name: 'notifications-home',
              component: NotificationsHome
          },
          {
              path: 'candidates',
              name: 'candidates',
              component: CandidatesNotificationView
          },
          {
              path: 'comments',
              name: 'comments',
              component: CommentsView
          },
          {
              path: 'jobs',
              name: 'jobs',
              component: JobsView
          },
          
        ]
      },
      {
        path: 'settings',
        name: 'setting-view',
        component: SettingsView,
        children: [
          {
            path: 'brand',
            name: 'setting-home',
            component: SettingsHome
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
