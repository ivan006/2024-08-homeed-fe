// src/store/modules/routeLineages.js
import RouteLineage from 'src/models/RouteLineage';

function standardizePath(path) {
  return typeof path === 'string' ? path.replace(/^\//, '') : '';
}

function flattenRoutes(routes) {
  const flatRoutes = {};

  function processRoute(route, parentPath = '') {
    const standardizedPath = standardizePath(parentPath + '/' + standardizePath(route.path));
    flatRoutes[standardizedPath] = route;
    if (route.children && route.children.length > 0) {
      route.children.forEach(subroute => processRoute(subroute, standardizedPath));
    }
  }

  routes.forEach(route => processRoute(route));
  return flatRoutes;
}

function processRouteForLineage(route, flatRoutes) {
  const standardizedPath = standardizePath(route.path);
  const lineage = [];
  let currentRoute = route;

  while (currentRoute) {
    const currentRoutePath = standardizePath(currentRoute.path || '');
    if (lineage.includes(currentRoutePath)) break; // Break if lineage already includes the path to prevent infinite loop

    lineage.unshift(currentRoutePath);
    const parentRouteName = currentRoute.meta?.breadcrumbParent || null;

    // If no breadcrumbParent, treat as root route and include itself in the lineage
    if (!parentRouteName) {
      break;
    }

    const parentRoutePath = parentRouteName ? standardizePath(parentRouteName) : null;
    currentRoute = flatRoutes[parentRoutePath] || null;
  }

  const breadcrumbName = route.meta?.breadcrumbName || '';
  const routeLineageData = {
    name: breadcrumbName,
    path: standardizedPath,
    parent: route.meta?.breadcrumbParent ? standardizePath(route.meta.breadcrumbParent) : null,
    lineage: lineage,
  };

  RouteLineage.insert({
    data: routeLineageData,
  });
}

export function generateRouteLineages(routes) {
  console.log('Generating route lineages...');
  const flatRoutes = flattenRoutes(routes);
  Object.values(flatRoutes).forEach(route => {
    processRouteForLineage(route, flatRoutes);
  });
  console.log('Route lineages generated.');
}
