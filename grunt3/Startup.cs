using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(grunt3.Startup))]
namespace grunt3
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
