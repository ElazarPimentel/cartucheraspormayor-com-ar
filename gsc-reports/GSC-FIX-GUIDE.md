# GSC Fix Guide - LLM Instructions

## Quick Diagnostics

**Check report summary:**
- 0 impressions = indexing/sitemap issue
- High impressions + 0 clicks = CTR/title/meta issue
- Low position (>10) = SEO/content issue

## Common Fixes

### 1. No Impressions (Not Indexed)

**Check sitemap:**
```python
mcp__gsc__get_sitemaps(site_url="sc-domain:example.com")
```

**Submit sitemap if missing:**
```python
mcp__gsc__submit_sitemap(
  site_url="sc-domain:example.com",
  sitemap_url="https://example.com/sitemap.xml"
)
```

**Inspect URL indexing:**
```python
mcp__gsc__inspect_url_enhanced(
  site_url="sc-domain:example.com",
  page_url="https://example.com/"
)
```

**Actions:**
- Verify sitemap exists and is accessible
- Submit sitemap via MCP
- Check robots.txt not blocking
- Request indexing via URL inspection

### 2. High Impressions, 0 Clicks (Poor CTR)

**Review queries with impressions but no clicks:**
- Check `queries_28d` array in report
- Identify position >3 queries
- Review `query_page_28d` for specific page issues

**Actions:**
- Improve page titles for top impression queries
- Add compelling meta descriptions
- Match title/description to search intent
- Check if position >10 needs content optimization

### 3. Low Position (<10)

**Review:**
- `queries_28d` → find queries with position >10
- `pages_28d` → identify underperforming pages

**Actions:**
- Optimize content for target queries
- Add relevant keywords naturally
- Improve internal linking
- Check competitor content depth

### 4. Declining Trends

**Check daily_28d:**
- Look for consistent decline in clicks/impressions
- Compare to previous period

**Actions:**
- Review recent site changes
- Check for technical errors
- Verify sitemap freshness
- Check Google Search Console for manual actions

## MCP Tools Reference

**List properties:**
```python
mcp__gsc__list_properties()
```

**Get analytics:**
```python
mcp__gsc__get_search_analytics(
  site_url="sc-domain:example.com",
  days=28,
  dimensions="query"
)
```

**Get performance overview:**
```python
mcp__gsc__get_performance_overview(
  site_url="sc-domain:example.com",
  days=28
)
```

**Batch URL inspection:**
```python
mcp__gsc__batch_url_inspection(
  site_url="sc-domain:example.com",
  urls="https://example.com/page1\nhttps://example.com/page2"
)
```

**Check indexing issues:**
```python
mcp__gsc__check_indexing_issues(
  site_url="sc-domain:example.com",
  urls="https://example.com/page1\nhttps://example.com/page2"
)
```

## Priority Order

1. **0 impressions** → Fix indexing first
2. **High impressions, 0 clicks** → Fix CTR (easy wins)
3. **Low position** → Content optimization (long-term)
4. **Declining trends** → Investigate recent changes

## Report Files

- `YYYY-MM-DD-HHMM-domain-gsc-report.json` - Machine-readable data
- `YYYY-MM-DD-HHMM-domain-gsc-report.html` - Human-readable summary
- `SEO-STATUS.txt` - Optimization status tracker (optional)

## Mark Site as Optimized

After completing SEO fixes, create status file:

```bash
echo -e "OPTIMIZED\n$(date +%Y-%m-%d)" > gsc-reports/SEO-STATUS.txt
```

This helps track which sites have been optimized and when.

## Key JSON Paths

- `summary.total_clicks_28d` - Total clicks
- `summary.total_impressions_28d` - Total impressions
- `data.queries_28d[0]` - Top query performance
- `data.pages_28d[0]` - Top page performance
- `data.daily_28d` - Day-by-day trends
