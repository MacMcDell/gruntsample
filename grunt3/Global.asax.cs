using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using grunt3.Bundler;

namespace grunt3
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);


            var useLocal = bool.Parse(ConfigurationManager.AppSettings["UseLocal"]);
            StaticAssets.Initialize(new StaticAssetResolver(Server.MapPath(useLocal? "~/assetsLocal.json":"~/assetsProd.json" ),HttpContext.Current.Cache));
            
      
        }
    }
}
