import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import logoLight from "@/assets/images/blognest.png";
import logoDark from "@/assets/images/nestblog.png";
import { IoHomeOutline } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";
import { GrBlog } from "react-icons/gr";
import { FaRegComments } from "react-icons/fa6";
import { LuUsers } from "react-icons/lu";
import { GoDot } from "react-icons/go";
import {
  RouteBlog,
  RouteBlogByCategory,
  RouteCategoryDetails,
  RouteCommentDetails,
  RouteIndex,
  RouteUser,
} from "@/helpers/RouteName";
import { useFetch } from "@/hooks/useFetch";
import { getEvn } from "@/helpers/getEnv";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
const AppSidebar = () => {
  const user = useSelector((state) => state.user);
  const { data: categoryData } = useFetch(
    `${getEvn("VITE_API_BASE_URL")}/category/all-category`,
    {
      method: "get",
      credentials: "include",
    }
  );
    const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Sidebar>
      <SidebarHeader className="bg-background">
        <img src={theme === "dark" ? logoDark : logoLight} width={120} />
      </SidebarHeader>
      <SidebarContent className="bg-background">
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <br></br>
              <SidebarMenuButton>
                <IoHomeOutline />
                <Link to={RouteIndex}>Home</Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            {user && user.isLoggedIn ? (
              <>
                 <SidebarMenuItem>
                  <SidebarMenuButton>
                    <GrBlog />
                    <Link to={RouteBlog}>Blogs</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <FaRegComments />
                    <Link to={RouteCommentDetails}>Comments</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
               </>
            ) : (
              <></>
            )}
            {user && user.isLoggedIn && user.user.role === "admin" ? (
              <>
               

                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <BiCategoryAlt />
                    <Link to={RouteCategoryDetails}>Categories</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <LuUsers />
                    <Link to={RouteUser}>Users</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </>
            ) : (
              <></>
            )}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Categories</SidebarGroupLabel>
          <SidebarMenu>
            {categoryData &&
              categoryData.category.length > 0 &&
              categoryData.category.map((category) => (
                <SidebarMenuItem key={category._id}>
                  <SidebarMenuButton>
                    <GoDot />
                    <Link to={RouteBlogByCategory(category.slug)}>
                      {category.name}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
